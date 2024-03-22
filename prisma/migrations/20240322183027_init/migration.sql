-- CreateEnum
CREATE TYPE "Status" AS ENUM ('EM_ANDAMENTO', 'APROVADO', 'REPROVADO', 'AGUARDANDO_RETORNO');

-- CreateTable
CREATE TABLE "Vagas" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Vagas_pkey" PRIMARY KEY ("id")
);
