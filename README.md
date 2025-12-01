# Flow Pilot

A modern workflow automation platform built with Next.js that enables users to create, manage, and execute complex automation workflows through a visual editor.

## Overview

Flow Pilot is a full-stack web application that allows users to:
- Design workflows using a visual node-based editor
- Create reusable automation scripts with various node types
- Execute workflows and track execution history
- Manage authentication with secure sessions
- Monitor workflow status and performance

## Tech Stack

### Frontend
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4
- **State Management**: Jotai, TanStack React Query
- **UI Components**: Radix UI
- **Visual Editor**: XY Flow (React Flow)
- **Form Handling**: React Hook Form with Zod validation

### Backend
- **Runtime**: Next.js with API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Better Auth
- **Job Queue**: Inngest (async workflow execution)
- **API Framework**: tRPC with TanStack React Query
- **AI Integration**: OpenAI, Anthropic, Google AI

### DevOps & Monitoring
- **Error Tracking**: Sentry
- **Process Management**: mprocs (local development)
- **Code Quality**: ESLint

## Project Structure

```
flow-pilot/
├── app/                          # Next.js app router
│   ├── (auth)/                   # Authentication pages (login, signup)
│   ├── (dashboard)/              # Dashboard routes
│   │   ├── (editor)/            # Workflow editor
│   │   └── (rest)/              # REST API routes (workflows, credentials, executions)
│   ├── api/                      # API routes
│   │   ├── auth/                # Better Auth configuration
│   │   ├── trpc/                # tRPC API endpoint
│   │   └── inngest/             # Inngest async functions
│   └── layout.tsx               # Root layout
├── components/                   # Reusable React components
│   ├── react-flow/              # Visual editor components
│   ├── ui/                       # UI component library (Radix UI)
│   └── ...                       # Page-specific components
├── features/                     # Feature modules
│   ├── auth/                    # Authentication logic
│   ├── editor/                  # Workflow editor
│   ├── executions/              # Workflow execution tracking
│   ├── subscriptions/           # User subscriptions
│   ├── triggers/                # Workflow triggers
│   └── workflows/               # Workflow management
├── lib/                          # Utility libraries
│   ├── auth.ts                  # Auth configuration
│   ├── db.ts                    # Database client
│   ├── auth-client.ts           # Client-side auth
│   └── generated/               # Generated Prisma client
├── prisma/                       # Database schema & migrations
├── trpc/                         # tRPC router configuration
├── public/                       # Static assets
└── config/                       # Configuration files
```

## Database Schema

The application uses PostgreSQL with the following key models:

- **User**: Stores user account information
- **Session**: Manages authenticated sessions
- **Account**: OAuth provider account links
- **Workflow**: User-created workflow definitions
- **Node**: Individual workflow nodes (Initial, Manual Trigger, HTTP Request)
- **Connection**: Links between workflow nodes
- **Verification**: Email verification tokens

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flow-pilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the required configuration:
   ```
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/flow_pilot

   # Better Auth
   BETTER_AUTH_SECRET=<your-secret>
   BETTER_AUTH_URL=http://localhost:3000

   # AI Providers
   OPENAI_API_KEY=<your-key>
   ANTHROPIC_API_KEY=<your-key>
   GOOGLE_GENERATIVE_AI_API_KEY=<your-key>

   # Inngest
   INNGEST_EVENT_KEY=<your-key>
   INNGEST_SIGNING_KEY=<your-key>

   # Sentry (optional)
   NEXT_PUBLIC_SENTRY_AUTH_TOKEN=<your-token>
   ```

4. **Set up the database**
   ```bash
   npm run prisma:migrate
   ```

5. **Generate Prisma client**
   ```bash
   npm run prisma:generate
   ```

### Development

**Run all services (recommended)**:
```bash
npm run dev:all
```
This runs Next.js dev server and Inngest in parallel using mprocs.

**Run individual services**:
```bash
# Next.js development server
npm run dev

# Inngest event listener
npm run inngest:dev

# Prisma Studio (database browser)
npm run prisma:studio
```

### Testing Payments

For development and testing payment functionality, use the following Stripe test credit card:

| Field | Value |
|-------|-------|
| Card Number | `4242 4242 4242 4242` |
| Expiry Date | Any future date (e.g., `12/25`) |
| CVC | Any 3-digit number (e.g., `123`) |
| Postal Code | Any 5-digit number (e.g., `12345`) |

**Note**: This is a test card that will not process real transactions. Use it only in development/staging environments. For other test scenarios, refer to [Stripe's test card documentation](https://stripe.com/docs/testing).

### Building for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run dev:all` - Run all services in parallel
- `npm run prisma:migrate` - Create and apply database migrations
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:reset` - Reset database (development only)
- `npm run inngest:dev` - Start Inngest local development

## Key Features

### Visual Workflow Editor
- Drag-and-drop node-based workflow builder
- Supported node types: Initial (trigger), Manual Trigger, HTTP Request
- Real-time preview and validation
- Connection management between nodes

### Authentication
- Secure user registration and login
- OAuth integration support
- Session management
- Email verification

### Workflow Execution
- Async job queue using Inngest
- Execution history tracking
- Status monitoring
- Error logging

### API
- tRPC API for type-safe client-server communication
- REST endpoints for core functionality
- Comprehensive error handling

## Project Status

Current branch: `main`

## License

Private project

## Support

For issues or questions, please contact the Paul Blankson.
