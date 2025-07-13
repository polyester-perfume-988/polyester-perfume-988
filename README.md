# Polyester Perfume Example App

## Tech Stack

### Frontend
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS + ShadCN UI
- **Data Fetching**: React Query
- **Forms**: React Hook Form

### Backend
- **Server**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma

### Services
- **Authentication**: Clerk
- **File Storage**: UploadThing
- **Package Manager**: pnpm

## Environment Variables

### Server (`apps/server/.env`)
```env
PORT=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
UPLOADTHING_TOKEN=
DATABASE_URL=
```

### Web (`apps/web/.env`)
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=
NEXT_PUBLIC_API_BASE_URL=
```

## Getting Started

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm run dev
```

## Database Commands

### Generate and Apply Migration
```bash
cd apps/server && pnpm dlx prisma migrate dev --name init
```

### Generate Prisma Client
```bash
cd apps/server && pnpm dlx prisma generate
```

### Open Prisma Studio
```bash
cd apps/server && pnpm dlx prisma studio
```

## Project Structure

This is a monorepo containing:
- `apps/server` - Express.js backend API
- `apps/web` - Next.js frontend application
