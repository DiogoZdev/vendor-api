import { PrismaClient } from '@prisma/client';

async function seed() {
  const prisma = new PrismaClient();

  try {
    await prisma.$connect();

    await prisma.$transaction(async (tx) => {
      await tx.location.createMany({
        data: [
          { name: 'Glades', state: 'FL' },
          { name: 'Gulf', state: 'FL' },
          { name: 'Hamilton', state: 'FL' },
          { name: 'Hardee', state: 'FL' },
          { name: 'Hendry', state: 'FL' },
          { name: 'El Paso', state: 'TX' },
          { name: 'Erath', state: 'TX' },
          { name: 'Falls', state: 'TX' },
          { name: 'Fannin', state: 'TX' },
          { name: 'Fayette', state: 'TX' },
          { name: 'Fisher', state: 'TX' },
        ],
      });

      await tx.service.createMany({
        data: [
          { name: 'Access Control Software' },
          { name: 'Air Conditioning' },
          { name: 'Landscaping' },
          { name: 'Landscaping Maintenance' },
          { name: 'Snow and Ice Removal' },
          { name: 'Sewer and Water Pipelining' },
        ],
      });
    });

    console.log('Database seed succeeded');
  } catch {
    console.error('[seed@database.seed] Failed to seed database');
  }

  await prisma.$disconnect();
}

seed();
