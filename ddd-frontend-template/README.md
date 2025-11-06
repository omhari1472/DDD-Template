# DDD Frontend Template

Domain-Driven Design frontend template with Next.js 14, React, and Redux Toolkit.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **State**: Redux Toolkit + Redux Persist
- **DI**: TSyringe
- **Server State**: React Query
- **Code Quality**: Biome

## Project Structure

```
app/                  # Next.js App Router
├── layout.tsx        # Root layout
├── page.tsx          # Routes
└── providers.tsx     # Client providers

src/
├── domain/           # Business logic & entities
├── data/             # Service implementations
├── application/      # Hooks & state
└── infrastructure/   # DI, Redux, config
```

See `CLAUDE.md` for detailed architecture guidelines.

