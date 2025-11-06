# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Domain-Driven Design (DDD) frontend template** built with React, TypeScript, and Next.js 14 (App Router). It follows clean architecture principles with clear separation of concerns across domain, data, application, and infrastructure layers.

## Development Commands

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run development server
npm run dev
# or
pnpm dev
# or
yarn dev

# Build for production
npm run build
# or
pnpm build
# or
yarn build

# Start production server
npm run start
# or
pnpm start
# or
yarn start

# Code formatting and linting with Biome
npx biome check --write .
npx biome format --write .
npx biome lint --write .
```

## Architecture

### Clean Architecture Pattern (DDD)

The codebase follows clean architecture with clear separation of concerns:

- **Domain Layer** (`domain/`): Core business logic, entities, interfaces, and services
  - `entity/`: Domain entities (business objects with behavior)
  - `interfaces/`: TypeScript interfaces for API contracts and data transfer objects
  - `service/`: Service interfaces defining business operations
  - `error/`: Domain-specific error definitions

- **Data Layer** (`data/`): Implementation of domain services
  - `service/selectors/`: Concrete implementations of domain services
  - Services handle API calls, data transformation, and external integrations
  - All service implementations are registered in DI container as singletons

- **Application Layer** (`application/`): State management and business logic orchestration
  - `slice/`: Redux Toolkit slices for state management
  - `state/`: Initial state definitions
  - `hooks/`: Custom React hooks that use services and manage state
  - `services/`: Application-level service orchestration

- **Infrastructure Layer** (`infrastructure/`):
  - `di/`: Dependency injection using tsyringe
  - `redux/`: Redux store configuration
  - `reactQuery/`: React Query setup for server state (optional)
  - `config.ts`: Application configuration

- **Presentation Layer** (`components/`): React components organized by feature domains

### Next.js App Router

The project uses Next.js 14 App Router with folder-based routing:

- **App Directory** (`app/`): Contains routes, layouts, and page components
  - `layout.tsx`: Root layout (applies to all routes)
  - `page.tsx`: Page component for each route
  - `loading.tsx`: Loading UI for the route
  - `error.tsx`: Error UI for the route
  - `providers.tsx`: Client-side providers (Redux, React Query, etc.)

- **Routing**: File-based routing - folders in `app/` create routes
  - `app/page.tsx` → `/`
  - `app/example/page.tsx` → `/example`
  - `app/users/[id]/page.tsx` → `/users/:id` (dynamic route)

- **Server Components vs Client Components**:
  - **Server Components** (default): No `'use client'` directive, run on server, can fetch data directly
  - **Client Components**: Add `'use client'` directive, run in browser, can use hooks and browser APIs

### Key Technologies

- **Framework**: Next.js 14 with React 18 and TypeScript
- **Routing**: App Router (folder-based routing)
- **State Management**: Redux Toolkit + Redux Persist
- **Server State**: React Query v5 (optional)
- **Dependency Injection**: TSyringe
- **HTTP Client**: Axios
- **Code Quality**: Biome for linting and formatting
- **Validation**: Zod for runtime type validation

### Dependency Injection

The app uses tsyringe for dependency injection. All services are registered in `infrastructure/di/container.ts`:

```typescript
import { diContainer } from '@/infrastructure/di/container';
import TYPES from '@/infrastructure/di/types';

const service = diContainer.resolve<IServiceType>(TYPES.IServiceType);
```

### Component Structure

- **App Router Pages** in `app/[route]/page.tsx` - Server Components by default
- **Layouts** in `app/layout.tsx` or `app/[route]/layout.tsx`
- **Feature components** in `src/components/[feature]/`
- **UI primitives** in `src/components/ui/` (optional)
- Components using hooks/state must have `'use client'` directive
- Components should use custom hooks from `application/hooks/` for business logic

### React Component Code Order

When structuring code within React components, follow this specific order:

1. **useState** - State declarations
2. **React hooks** - Built-in React hooks (useMemo, useCallback, useContext, etc.)
3. **Custom hooks** - Project-specific custom hooks
4. **const values** - Constants and derived values
5. **Handler functions** - Event handlers and callbacks
6. **useEffect** - Side effects (always at the end before return)

### Type Safety

- Strict TypeScript configuration
- Path alias `@/*` maps to `./*` (root directory)
- Comprehensive type definitions in domain layer
- Domain entities enforce business rules
- Next.js automatically generates types for routes

### Code Quality Rules

1. **Always use path aliases** instead of relative imports
2. **Follow DDD principles**: Keep domain logic in domain layer, not in components
3. **Use dependency injection** for services through TSyringe container
4. **Keep components pure** - move business logic to hooks and services
5. **Use Redux for global state** - use local state for component-specific state
6. **Follow naming conventions**: Use PascalCase for components/classes, camelCase for functions
7. **Write type-safe code** - avoid `any` unless absolutely necessary
8. **Use domain entities** - transform API responses to domain entities
9. **Handle errors properly** - use CustomError from domain layer
10. **Keep services testable** - inject dependencies, avoid side effects

### Adding New Features

1. Create domain entity in `src/domain/entity/[feature]Entity.ts`
2. Create domain interfaces in `src/domain/interfaces/[feature]Interface.ts`
3. Create service interface in `src/domain/service/[feature]Interface.ts`
4. Implement service in `src/data/service/selectors/[feature]ServiceImpls.ts`
5. Register service in `src/infrastructure/di/container.ts`
6. Create Redux slice in `src/application/slice/[feature]Slice.ts`
7. Create custom hook in `src/application/hooks/use[Feature].ts`
8. Create components in `src/components/[Feature]/` (add `'use client'` if using hooks)
9. Create route page in `app/[route]/page.tsx` (Server Component) or use component in existing page
10. Use the hook in client components

### State Management

- **Redux**: Global application state
- **Redux Persist**: Persist state across sessions
- **Local State**: Component-specific state using useState
- **React Query**: Server state caching (optional, if configured)

### API Integration

Services in `data/service/selectors/` handle all API calls:
- Follow domain service interfaces
- Use axios for HTTP requests
- Transform data between API and domain entities
- Handle errors with CustomError

### Important Implementation Notes

- **Server Components First**: Default to Server Components, only use Client Components when needed (hooks, interactivity, browser APIs)
- **Client Components**: Mark with `'use client'` at the top of the file
- **Data Fetching**: Server Components can fetch data directly, Client Components should use hooks/services
- **Service Layer Pattern**: All business logic goes through dependency-injected services
- **Domain Entities**: Use domain entities with business logic, not plain objects
- **Error Handling**: Use CustomError from domain layer for consistent error handling
- **Type Safety**: Leverage TypeScript for compile-time type checking
- **Dependency Injection**: Use DI container for all service dependencies
- **Routing**: Use Next.js App Router folder structure for routing
- **Providers**: Client-side providers (Redux, React Query) are in `app/providers.tsx` and wrapped in `app/layout.tsx`

