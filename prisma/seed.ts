import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "Evelyn",
      password: "123",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Levi",
      password: "1234",
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
