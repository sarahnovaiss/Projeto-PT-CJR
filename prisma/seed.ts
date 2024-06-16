import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

//criando um novo usuario
async function createTeacher(name, department, photo) {
  try {
    const newTeacher = await prisma.teacher.create({
      data: {
        name,
        department,
        photo: Buffer.from(photo),
      },
    });
    console.log('Professor adicionado.', newTeacher);
  } catch (error) {
    console.log('Erro ao adicionar professor.', error);
  }
}

async function createSubjects(name) {
  try {
    const newSubjects = await prisma.subject.create({
      data: {
        name,
      },
    });
    console.log('Disciplina adicionada.', newSubjects);
  } catch (error) {
    console.log('Erro ao adicionar disciplina.', error);
  }
}

async function createTeacherSubjects(teacherId, subjectId) {
  try {
    const newTeacherSubjects = await prisma.teacherSubject.create({
      data: {
        teacherId,
        subjectId,
      },
    });
    console.log('Disciplina adicionada.', newTeacherSubjects);
  } catch (error) {
    console.log('Erro ao adicionar disciplina.', error);
  }
}

async function main() {
  await createTeacher('Carlos Louro', 'CIC', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t1
  await createSubjects('APC'); //1
  await createSubjects('Cálculo I'); //2
  await createSubjects('Álgebra Linear'); //3
  await createSubjects('Cálculo II'); //4
  await createSubjects('Compiladores'); //5
  await createSubjects('Redes de Computadores'); //6
  await createSubjects('Programação Orientada a Objetos'); //7
  await createSubjects('Sistemas Operacionais'); //8
  await createSubjects('Sistemas Distribuídos'); //9
  await createSubjects('Banco de Dados I'); //10
  await createSubjects('Banco de Dados II'); //11
  await createSubjects('Cálculo III'); //12
  await createSubjects('Estrutura de Dados I'); //13
  await createSubjects('Estrutura de Dados II'); //14
  await createSubjects('Linguagem de Programação'); //15
  await createSubjects('Matemática Discreta'); //16
  await createSubjects('Probabilidade e Estatística'); //17
  await createSubjects('Geologia'); //18
  await createSubjects('Teoria da Computação'); //19
  await createSubjects('Física II'); //20
  await createTeacher('Péricles', 'CIC', "https://f.i.uol.com.br/fotografia/2023/09/04/169387999564f68ebb3cc2c_1693879995_3x2_md.jpg"); //t2
  await createTeacher('Irineu', 'CIC', "https://us-tuna-sounds-images.voicemod.net/f3b8a5d5-8f88-4d9c-b775-58543cb88919-1682373209243.jpg"); //t3
  await createTeacher('Aristóteles', 'CIC', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPyVF5tPugTskTSxSnYEpMGg5323KVGuW5w&s"); //t4
  await createTeacher('Fulano', 'Matemática', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t5
  await createTeacher('Ciclano', 'Matemática', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t6
  await createTeacher('Flavin do Pneu', 'Rochas', "https://pbs.twimg.com/profile_images/1293256330829082625/CHKLuxN0_400x400.jpg"); //t7
  await createTeacher('Beltrano', 'CIC', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t8
  await createTeacher('José', 'Física', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t9
  await createTeacher('Anibol', 'Física', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t10
  await createTeacher('Natasha Caldeirão', 'CIC', "https://thumbnailer.mixcloud.com/unsafe/200x200/extaudio/b/9/4/b/2bc8-92e3-4f2f-a363-f399dec512f8"); //t1
  await createTeacher('Taylor Shift', 'CIC', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t12
  await createTeacher('Ana Banana', 'CIC', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t13
  await createTeacher('Brad Peach', 'Matemática', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t14
  await createTeacher('Marcelo Martelo', 'CIC', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t15
  await createTeacher('Vin Gasolina', 'Estatística', "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"); //t16
  await createTeacherSubjects(1, 1);
  await createTeacherSubjects(2, 2);
  await createTeacherSubjects(4, 3);
  await createTeacherSubjects(6, 4);
  await createTeacherSubjects(13, 5);
  await createTeacherSubjects(3, 6);
  await createTeacherSubjects(7, 7);
  await createTeacherSubjects(10, 8);
  await createTeacherSubjects(8, 9);
  await createTeacherSubjects(4, 10);
  await createTeacherSubjects(11, 11);
  await createTeacherSubjects(9, 12);
  await createTeacherSubjects(11, 14);
  await createTeacherSubjects(5, 15);
  await createTeacherSubjects(16, 16);
  await createTeacherSubjects(12, 17);
  await createTeacherSubjects(7, 18);
  await createTeacherSubjects(15, 19);
  await createTeacherSubjects(2, 20);
  await createTeacherSubjects(14, 13);
}

main()
  .catch((e) => {
    console.error('Error updating users:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
