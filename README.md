# @lannis.ai/prisma-orm

A customized ORM package for Lannis applications, built on top of Prisma ORM. This package provides a pre-configured Prisma client with models designed for user management and financial applications.

## Features

- **Pre-configured Prisma Client**: Ready to use with your Lannis applications
- **User Management Models**: Includes models for users, roles, and addresses
- **Financial Models**: Supports Monotributo categories and other financial entities
- **Location Data**: Includes models for countries and currencies

## Installation

```bash
npm install @lannis.ai/prisma-orm
# or
yarn add @lannis.ai/prisma-orm
```

When you install this package, it automatically runs the Prisma generate command to create the client and builds the TypeScript code. No additional steps are required to get started.

## Usage

```typescript
import { prisma } from '@lannis.ai/prisma-orm';

// Example: Query all users
async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

// Use any of the generated Prisma client models and methods
```

## Database Schema

The package includes the following main models:

- **User**: Core user entity with authentication and profile information
- **Address**: User address information linked to countries
- **Role**: User role definitions for access control
- **MonotributoCategory**: Argentine tax categories for monotributo
- **Country**: Country reference data
- **Currency**: Currency reference data

## Configuration

Create a `.env` file in your project root with the following:

```
DATABASE_URL="your-database-connection-string"
```

See `.env.example` for reference.

## Available Scripts

This package provides several npm scripts to help with development:

- `npm run build`: Compiles TypeScript code to JavaScript
- `npm run lint`: Runs TypeScript type checking without emitting files
- `npm run db:generate`: Generates Prisma client based on your schema
- `npm run db:migrate`: Runs Prisma migrations in development mode
- `npm run db:studio`: Opens Prisma Studio to view and edit your database

## Development

To work on this package:

1. Clone the repository
2. Install dependencies with `npm install` or `yarn`
3. Configure your `.env` file with a valid PostgreSQL connection string
4. Run `npm run db:generate` to generate the Prisma client
5. Make your changes to the schema in `prisma/schema.prisma`
6. Run migrations with `npm run db:migrate`

## License

MIT
