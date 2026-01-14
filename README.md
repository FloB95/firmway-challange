# Firmway EU - Risk Analysis Dashboard

A modern, enterprise-grade risk analysis dashboard built with Next.js 15, React 19, and TypeScript. The application provides visualization and analysis of risk contributors with disruption probability charts and statistical metrics.

## Features

- **Risk Contributors List** - Interactive list of risk items with categories, impact percentages, and selection
- **Disruption Exposure Charts** - Probability density function visualization with safety stock and mean disruption markers
- **Risk Statistics** - Key metrics including Probability, Mean, P90, and MTTR (Mean Time To Recovery)
- **Responsive Design** - Mobile-friendly layout with dark mode support
- **Type-Safe API** - Fully typed API routes with Zod validation

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 15](https://nextjs.org/) with App Router |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict mode) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| UI Components | [Radix UI](https://www.radix-ui.com/) primitives |
| Charts | [Recharts](https://recharts.org/) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) |
| Environment | [T3 Env](https://env.t3.gg/) for type-safe env variables |
| Unit Testing | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| E2E Testing | [Playwright](https://playwright.dev/) |
| Component Docs | [Storybook](https://storybook.js.org/) |
| Linting | [ESLint](https://eslint.org/) with Next.js config |
| Formatting | [Prettier](https://prettier.io/) with Tailwind plugin |
| Package Manager | [pnpm](https://pnpm.io/) |

## Requirements

- Node.js >= 20.0.0
- pnpm 10.0.0

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd firmway-eu

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server with Turbopack
pnpm dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm prettier` | Check code formatting |
| `pnpm prettier:fix` | Fix code formatting |
| `pnpm format` | Format TypeScript and Markdown files |
| `pnpm test` | Run unit tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:ui` | Run tests with UI |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm e2e:headless` | Run Playwright E2E tests |
| `pnpm e2e:ui` | Run Playwright tests with UI |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build static Storybook |
| `pnpm analyze` | Analyze bundle size |
| `pnpm coupling-graph` | Generate module dependency graph |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── health/        # Health check endpoint
│   │   └── risks/         # Risk data endpoints
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── providers.tsx      # React Query provider
├── components/            # React components
│   ├── ui/               # Base UI components (Button, Card, Progress, etc.)
│   ├── RiskContributorItem/
│   ├── RiskContributorsList/
│   ├── RiskDetailPanel/   # Chart, legend, and stats components
│   └── StatCard/
├── lib/                   # Utilities and hooks
│   ├── api/              # API client and types
│   ├── hooks/            # Custom React hooks
│   └── utils.ts          # Utility functions
└── styles/               # Global styles
    └── tailwind.css
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/risks` | GET | Get list of all risk contributors |
| `/api/risks/:id` | GET | Get detailed risk data with chart data |
| `/api/health` | GET | Health check endpoint |

Health check aliases: `/healthz`, `/api/healthz`, `/health`, `/ping`

## Testing

### Unit Tests

Tests are written with Vitest and Testing Library. Run tests with:

```bash
pnpm test              # Run once
pnpm test:watch        # Watch mode
pnpm test:coverage     # With coverage
```

### E2E Tests

End-to-end tests use Playwright:

```bash
pnpm e2e:headless     # Headless mode
pnpm e2e:ui           # Interactive UI mode
```

### Storybook Tests

```bash
pnpm storybook         # Start Storybook
pnpm test-storybook    # Run Storybook tests
```

## Component Documentation

Components are documented with Storybook. Each component includes:

- Story files (`*.stories.tsx`)
- Test files (`*.test.tsx`)
- TypeScript interfaces

Start Storybook to browse components:

```bash
pnpm storybook
# Open http://localhost:6006
```

## Environment Variables

Environment variables are validated using `@t3-oss/env-nextjs` with Zod schemas.

| Variable | Description | Required |
|----------|-------------|----------|
| `ANALYZE` | Enable bundle analyzer (`true`/`false`) | No |

## Code Quality

The project enforces code quality through:

- **ESLint** - Linting with Next.js and TypeScript rules
- **Prettier** - Code formatting with Tailwind CSS plugin
- **TypeScript** - Strict mode with `noUncheckedIndexedAccess`
- **Pre-commit hooks** - Configured via `.pre-commit-config.yaml`

## License

Private
