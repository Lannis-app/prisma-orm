import { PrismaClient } from '../prisma/src/generated/prisma/client';

const prisma = new PrismaClient();

export { prisma };
export * from '../prisma/src/generated/prisma/client'; 