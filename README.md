# DDD Architecture Templates

Domain-Driven Design (DDD) templates for building scalable frontend and backend applications with clean architecture principles.

## 🏗️ Templates

### Backend Template (`ddd-backend-template`)
- **Framework**: Cloudflare Workers
- **Database**: Drizzle ORM (MySQL)
- **API**: OpenAPI/Swagger
- **DI**: TSyringe
- **Code Quality**: Biome

### Frontend Template (`ddd-frontend-template`)
- **Framework**: Next.js 14 (App Router)
- **State Management**: Redux Toolkit + Redux Persist
- **DI**: TSyringe
- **Code Quality**: Biome

## 🚀 Quick Start

### Backend
```bash
cd ddd-backend-template
npm install
npm run dev
```

### Frontend
```bash
cd ddd-frontend-template
npm install
npm run dev
```

## 📁 Architecture

Both templates follow Clean Architecture with DDD principles:

- **Domain Layer**: Business logic and entities
- **Application Layer**: Use cases and orchestration
- **Infrastructure Layer**: Data access and external services
- **Presentation Layer**: API routes (backend) / Components (frontend)

## 🛠️ Tech Stack

### Backend
- TypeScript
- Cloudflare Workers
- Drizzle ORM
- Itty Router
- Chanfana (OpenAPI)
- TSyringe

### Frontend
- TypeScript
- Next.js 14
- React 18
- Redux Toolkit
- React Query
- TSyringe

## 📚 Documentation

See `CLAUDE.md` in each template directory for detailed architecture guidelines and development patterns.

## 📝 License

MIT

