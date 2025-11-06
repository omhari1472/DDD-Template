# DDD Frontend Template

A Domain-Driven Design (DDD) frontend template built with React, TypeScript, and Next.js 14 (App Router).

## Features

- ✅ Domain-Driven Design architecture
- ✅ Clean Architecture pattern
- ✅ Next.js 14 App Router (folder-based routing)
- ✅ Server Components and Client Components support
- ✅ Dependency Injection with TSyringe
- ✅ Redux Toolkit for state management
- ✅ React Query for server state (optional)
- ✅ Biome for code quality and formatting
- ✅ Type-safe with TypeScript
- ✅ SSR/SSG support

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Project Structure

```
app/                  # Next.js App Router (routes, layouts, pages)
├── layout.tsx        # Root layout
├── page.tsx          # Home page
├── providers.tsx     # Client-side providers (Redux, React Query)
├── globals.css       # Global styles
└── [route]/          # Route folders (folder-based routing)

src/
├── application/       # Application layer (hooks, slices, state)
├── components/        # React components
├── constants/         # Application constants
├── data/             # Data layer (service implementations)
├── domain/           # Domain layer (entities, interfaces, services)
└── infrastructure/   # Infrastructure layer (DI, Redux, config)
```

## Architecture

The project follows Clean Architecture with DDD principles:

- **Domain Layer**: Core business logic and entities
- **Data Layer**: Service implementations and API calls
- **Application Layer**: State management and hooks
- **Infrastructure Layer**: DI, Redux, configuration
- **Presentation Layer**: React components

## Code Quality

```bash
# Lint and format code
npm run lint
npm run format
npm run lint:fix
```

## License

MIT

