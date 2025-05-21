# @lannis.ai/prisma-orm

A shared Prisma schema package for Lannis applications. This package provides only the Prisma schema definition that can be used across different projects to maintain database consistency.

## Features

- **Shared Prisma Schema**: Common schema definition for all Lannis applications
- **User Management Models**: Includes models for users, roles, and addresses
- **Financial Models**: Supports Monotributo categories and other financial entities
- **Location Data**: Includes models for countries and currencies

## Installation

```bash
npm install @lannis.ai/prisma-orm prisma @prisma/client
# or
yarn add @lannis.ai/prisma-orm prisma @prisma/client
```

## Usage

After installing the package, you need to:

1. Create a `prisma/schema.prisma` file in your project that references the shared schema:

```prisma
// Import the shared schema
import "@lannis.ai/prisma-orm/prisma/schema.prisma"

// You can add additional models or override settings here if needed
```

2. Configure your environment:

Create a `.env` file in your project root with your database connection:

```
DATABASE_URL="your-database-connection-string"
```

3. Generate the Prisma client:

```bash
npx prisma generate
```

4. Use the generated client in your code:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Example: Query all users
async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}
```

## Database Schema

The package includes the following main models:

- **User**: Core user entity with authentication and profile information
- **Address**: User address information linked to countries
- **Role**: User role definitions for access control
- **MonotributoCategory**: Argentine tax categories for monotributo
- **Country**: Country reference data
- **Currency**: Currency reference data

## Development

To work on this schema package:

1. Clone the repository
2. Install dependencies with `npm install` or `yarn`
3. Configure your `.env` file with a valid PostgreSQL connection string
4. Make your changes to the schema in `prisma/schema.prisma`
5. Test with `npx prisma validate`
6. Run migrations with `npm run db:migrate` for development testing

## License

MIT
