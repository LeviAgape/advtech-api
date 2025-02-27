import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "Evelyn",
      password: "123",
      role: "user",
      createdAt: new Date("2025-01-02T19:27:44.260Z"),
      updatedAt: new Date("2025-01-02T19:27:44.260Z"),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Levi",
      password: "1234",
      role: "admin",
      createdAt: new Date("2025-01-02T19:27:44.260Z"),
      updatedAt: new Date("2025-01-02T19:27:44.260Z"),
    },
  });

  const process1 = await prisma.process.create({
    data: {
      numberProcess: "2025/001",
      forumName: "Fórum Central",
      courtName: "Vara Cível",
      courtNumber: "1",
      author: "Dr. João Silva",
      defendantName: "Empresa ABC",
      processStatus: "Em andamento",
      status: "processing",
      pending: "Aguardando documentos adicionais",
      note: "Processo iniciado com urgência.",
      processDate: "2023-01-02",
      partner: "Escritório XYZ",
      department: "Civil",
      processOutcome: "undefined",
      value: 15000.5,
      portion: 3,
      createdAt: new Date("2025-01-01T09:00:00.000Z"),
      updatedAt: new Date("2025-01-01T09:00:00.000Z"),
    },
  });

  const process2 = await prisma.process.create({
    data: {
      numberProcess: "2025/002",
      forumName: "Fórum Norte",
      courtName: "Vara Trabalhista",
      courtNumber: "2",
      author: "Dra. Ana Pereira",
      defendantName: "Carlos Almeida",
      processStatus: "Arquivado",
      status: "archived",
      pending: null,
      note: "Processo concluído sem recursos.",
      processDate: "2023-01-01",
      partner: "Escritório Alpha",
      department: "Trabalhista",
      processOutcome: "won",
      value: 5000,
      portion: 1,
      createdAt: new Date("2024-12-15T09:00:00.000Z"),
      updatedAt: new Date("2024-12-15T09:00:00.000Z"),
    },
  });

  const process3 = await prisma.process.create({
    data: {
      numberProcess: "2025/002",
      forumName: "Fórum Norte",
      courtName: "Vara Trabalhista",
      courtNumber: "2",
      author: "Dra. Ana Pereira",
      defendantName: "Carlos Almeida",
      processStatus: "Arquivado",
      status: "archived",
      pending: null,
      note: "Processo concluído sem recursos.",
      processDate: "2023-01-01",
      partner: "Escritório Alpha",
      department: "Trabalhista",
      processOutcome: "won",
      value: 900000000000,
      portion: 5,
      createdAt: new Date("2024-12-15T09:00:00.000Z"),
      updatedAt: new Date("2024-12-15T09:00:00.000Z"),
    },
  });

  const petition = await prisma.petition.create({
    data: {
      author: "Carlos",
      defendantName: "Juninho",
      processType: "Civil",
      partner: "Bianca",
    },
  });

  const petition2 = await prisma.petition.create({
    data: {
      author: "João",
      defendantName: "Morgana",
      processType: "Criminal",
      partner: "Bianca",
    },
  });

  await prisma.finance.create({
    data: {
      processId: process2.id, 
      value: process2.value,
      portion: process2.portion, 
    },
  });

  await prisma.finance.create({
    data: {
      processId: process1.id, 
      value: process1.value,
      portion: process1.portion, 
    },
  });

  console.log({ user1, user2, process1, process2, process3, petition, petition2 });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
