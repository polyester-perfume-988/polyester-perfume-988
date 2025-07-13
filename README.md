# Polyester Perfume Example App

Package manager: pnpm

Authentiation:Clerk
Database: PostgreSQL using Prisma ORM
File Storage: UploadThing
Typescript

Frontend:
Next.js
Tailwind CSS
ShadCN
React Query
React Hook Form

Backend:
Express
Prisma ORM
PostgreSQL

ENV variables server:
`PORT`
`CLERK_PUBLISHABLE_KEY`
`CLERK_SECRET_KEY`
`UPLOADTHING_TOKEN`
`DATABASE_URL`

ENV variables web:
`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
`CLERK_SECRET_KEY`
`NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL`
`NEXT_PUBLIC_API_BASE_URL`

Please run `pnpm install` to install dependencies. Run `pnpm run dev` to start the development server.

To generate SQL migration and apply it:
`cd apps/server && pnpm dlx prisma migrate dev --name init`

To generate the Prisma Client:
`cd apps/server && pnpm dlx prisma generate`

To open Prisma Studio:
`cd apps/server && pnpm dlx prisma studio`
