/*
  Warnings:

  - The `seatsBooked` column on the `UserBooking` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserBooking" DROP COLUMN "seatsBooked",
ADD COLUMN     "seatsBooked" JSONB[];
