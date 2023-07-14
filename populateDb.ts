import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createLiked() {
    const movie = await prisma.movie.findUnique({ where: { name: "Gifted" }, include: { likedByUsers: true } })

    const likedByUsers = movie.likedByUsers.map(liked => liked.userId)

    const users = await prisma.user.findMany({
        where: {
            id: { in: likedByUsers }
        }
    })
    console.log(users)
}

async function deleteMovie() {
    await prisma.movie.deleteMany();
}

// deleteMovie()
createLiked();









//MOVIES:
// name: "Elemental",
// description: "In the Element City where elements do not mix, Ember bumps into Wade and sparked on a journey together that would change her life. Maybe elements could mix after all.",
// actors: ["Zach Lee", "Arno Meyer", "Jennifer Anderson"],
// showtimes: [
//     "09:00 AM",
//     "11:45 AM",
//     "15:00 PM",
//     "20:00 PM",
//     "21:00 PM",
//     "22:00 PM",
//     "23:00 PM"
// ],
// genres: [
//     "Adventure",
//     "Romance",
//     "Action"
// ],
// imgUrl: "https://drive.google.com/uc?id=1-eDMG5js0ldwRIbxB_1eFvkZA27-mexq&export=download"


