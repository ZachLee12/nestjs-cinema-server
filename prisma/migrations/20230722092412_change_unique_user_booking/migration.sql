/*
  Warnings:

  - A unique constraint covering the columns `[userId,hallId,seatsBooked]` on the table `UserBooking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserBooking_userId_movieId_hallId_key";

-- CreateIndex
CREATE UNIQUE INDEX "UserBooking_userId_hallId_seatsBooked_key" ON "UserBooking"("userId", "hallId", "seatsBooked");
