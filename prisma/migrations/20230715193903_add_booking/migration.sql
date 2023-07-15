-- CreateEnum
CREATE TYPE "HallSize" AS ENUM ('BIG', 'MEDIUM', 'SMALL');

-- CreateTable
CREATE TABLE "Hall" (
    "id" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "showtime" TEXT NOT NULL,
    "hallSize" "HallSize" NOT NULL,

    CONSTRAINT "Hall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBooking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "showtime" TEXT NOT NULL,
    "seatsBooked" INTEGER[],

    CONSTRAINT "UserBooking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hall" ADD CONSTRAINT "Hall_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBooking" ADD CONSTRAINT "UserBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBooking" ADD CONSTRAINT "UserBooking_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
