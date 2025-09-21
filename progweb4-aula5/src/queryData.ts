import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CursoComModulo {
  name: string;
  modules: {
    module: {
      title: string;
    };
  }[];
}

async function main() {
  const cursoComModulos: CursoComModulo[] = await prisma.course.findMany({
    include: {
      modules: {
        include: {
          module: true,
        },
      },
    },
  });

  for (const curso of cursoComModulos) {
    console.log(`Curso: ${curso.name}`);
    console.log('Módulos:');
    curso.modules.forEach((rel) => {
      console.log(`- ${rel.module.title}`);
    });
    console.log('-----------------------');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());