import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const curso = await prisma.course.create({
    data: {
      name: 'Curso de Node.js',
    },
  });


  const modulo1 = await prisma.module.create({
    data: {
      title: 'Introdução ao Node.js',
    },
  });

  const modulo2 = await prisma.module.create({
    data: {
      title: 'Prisma ORM',
    },
  });

  await prisma.coursesModules.createMany({
    data: [
      { courseId: curso.id, moduleId: modulo1.id },
      { courseId: curso.id, moduleId: modulo2.id },
    ],
  });

  console.log('Curso, módulos e associações criados com sucesso.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());