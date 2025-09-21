import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.coursesModules.delete({
    where: {
      courseId_moduleId: {
        courseId: 1,
        moduleId: 2,
      },
    },
  });

  console.log('Associação removida com sucesso.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
