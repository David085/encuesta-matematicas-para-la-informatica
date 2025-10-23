-- CreateEnum
CREATE TYPE "Q1Option" AS ENUM ('ECONOMICOS', 'SOBRECARGA_ESTRES', 'EQUILIBRIO_ESTUDIO_TRABAJO_VIDA', 'FALTA_APOYO_EMOCIONAL');

-- CreateEnum
CREATE TYPE "Q2Option" AS ENUM ('FALTA_MATERIALES', 'ESTRES_ANSIEDAD', 'FALTA_TIEMPO', 'DESMOTIVACION');

-- CreateEnum
CREATE TYPE "Q3Option" AS ENUM ('TRABAJO_TEMPORAL', 'REDUCIR_GASTOS', 'APOYO_FAMILIAR', 'DEJAR_ESTUDIOS');

-- CreateEnum
CREATE TYPE "Q4Option" AS ENUM ('ESTRES_AGOTAMIENTO', 'ALTIBAJOS_EQUILIBRIO', 'AYUDA_PROFESIONAL', 'ESTABLE_MOTIVADO');

-- CreateEnum
CREATE TYPE "Q5Option" AS ENUM ('BECAS_APOYOS', 'SALUD_MENTAL', 'FLEXIBILIDAD_METODOS', 'ACTIVIDADES_INTEGRACION');

-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientHash" TEXT,
    "email" VARCHAR(254) NOT NULL,
    "emailCanon" VARCHAR(254) NOT NULL,
    "q1" "Q1Option" NOT NULL,
    "q2" "Q2Option" NOT NULL,
    "q3" "Q3Option" NOT NULL,
    "q4" "Q4Option" NOT NULL,
    "q5" "Q5Option" NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Response_clientHash_key" ON "Response"("clientHash");

-- CreateIndex
CREATE UNIQUE INDEX "Response_emailCanon_key" ON "Response"("emailCanon");

-- CreateIndex
CREATE INDEX "Response_submittedAt_idx" ON "Response"("submittedAt");
