-- CreateEnum
CREATE TYPE "HallSize" AS ENUM ('BIG', 'MEDIUM', 'SMALL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "actors" TEXT[],
    "showtimes" TEXT[],
    "genres" TEXT[],
    "imgUrlHorizontal" TEXT,
    "imgUrlVertical" TEXT,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liked" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "Liked_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "Watched" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "Watched_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "Hall" (
    "id" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "showtime" TEXT NOT NULL,
    "hallSize" "HallSize" NOT NULL,
    "numberOfSeats" INTEGER NOT NULL,

    CONSTRAINT "Hall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBooking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "seatsBooked" INTEGER[],
    "hallId" TEXT NOT NULL,

    CONSTRAINT "UserBooking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_name_key" ON "Movie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hall_movieId_hallSize_showtime_key" ON "Hall"("movieId", "hallSize", "showtime");

-- CreateIndex
CREATE UNIQUE INDEX "UserBooking_userId_movieId_hallId_key" ON "UserBooking"("userId", "movieId", "hallId");

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hall" ADD CONSTRAINT "Hall_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBooking" ADD CONSTRAINT "UserBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBooking" ADD CONSTRAINT "UserBooking_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBooking" ADD CONSTRAINT "UserBooking_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
