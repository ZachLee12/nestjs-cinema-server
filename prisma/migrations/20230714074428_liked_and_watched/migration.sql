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
    "imgUrl" TEXT,

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

-- CreateIndex
CREATE UNIQUE INDEX "Movie_name_key" ON "Movie"("name");

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
