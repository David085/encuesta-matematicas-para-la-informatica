/*
  Warnings:

  - Added the required column `career` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Response` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "career" VARCHAR(100) NOT NULL,
ADD COLUMN     "name" VARCHAR(100) NOT NULL;
