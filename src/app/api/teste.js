import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function Teste() {
    const teste1 = await prisma.produtos.findMany({take:5});
    return teste1;
}

const result = await Teste()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export default result;
