# DDD Backend Template

A Domain-Driven Design (DDD) backend template built with TypeScript, Cloudflare Workers, and OpenAPI/Swagger.

## Features

- ✅ Domain-Driven Design architecture
- ✅ OpenAPI/Swagger documentation
- ✅ Dependency Injection with TSyringe
- ✅ Drizzle ORM for database operations
- ✅ Biome for code quality and formatting
- ✅ Type-safe API with Zod validation
- ✅ Custom exception handling
- ✅ JWT authentication middleware

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Cloudflare account (for deployment)

### Installation

```bash
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun run dev
```

### Build

```bash
npm run build
```

### Deployment

```bash
npm run deploy
```

## Project Structure

```
src/
├── constants/          # Application constants
├── controllers/        # Request handlers by feature
├── exceptions/         # Custom exception classes
├── infrastructure/     # Core models, DI container, types
├── middlewares/        # Auth middleware
├── models/            # Domain models and DTOs
├── repository/        # Data access layer
├── routes/            # API route definitions
├── services/          # Business logic services
└── utils/             # Utility functions
```

## API Documentation

Once the server is running, visit `/server/docs` to view the OpenAPI documentation.

## Code Quality

```bash
# Lint and format code
npm run lint
npm run format
npm run lint:fix
```

## License

MIT

