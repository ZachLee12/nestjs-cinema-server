import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function deleteMovie() {
    await prisma.movie.deleteMany();
}

async function createMovie() {
    const movie = await prisma.movie.create({
        data: {
            name: 'Logan',
            description: 'In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.',
            actors: ['Ryan Gosling', 'Hugh Jackman', 'Ryan Reynolds'],
            genres: ['Action', 'Thriller'],
            showtimes: ['08:00 AM', '09:00 AM', '12:00 PM', '13:00 PM', '15:00 PM', '20:00 PM'],
            // imgUrl: "https://drive.google.com/uc?id=1AtKybsFE_nyCIWInWmfiVNVW66haWIQR&export=download"
        }
    })
    console.log(movie)
}

// deleteMovie()
// createLiked();
createMovie()









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


