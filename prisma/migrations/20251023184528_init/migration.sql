/*
  Warnings:

  - You are about to drop the column `emailCanon` on the `Response` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Response` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Response_emailCanon_key";

-- AlterTable
ALTER TABLE "Response" DROP COLUMN "emailCanon";

-- CreateIndex
CREATE UNIQUE INDEX "Response_email_key" ON "Response"("email");
