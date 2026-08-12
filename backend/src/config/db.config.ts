import prisma from "../lib/prisma";

export const dbConnect = async () => {
  try {
    await prisma.$connect();
    console.log(`Connected to PostgreSQL`);
  } catch (error: any) {
    console.log(`Failed to connect to PostgreSQL: ${error.message}`);
  }
};
