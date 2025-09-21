import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const autor = await prisma.author.create({
    data: {
      name: 'George R. R. Martin',
      books: {
        create: [
          { title: 'A Game of Thrones' },
          { title: 'A Clash of Kings' }
        ]
      }
    },
    include: {
      books: true
    }
  });

  console.log('Autor criado com livros:', autor);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });