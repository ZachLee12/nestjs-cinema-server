import { PrismaClient } from '@prisma/client'
import { movieData } from './movies'

const prisma = new PrismaClient()


async function deleteMovie() {
    await prisma.movie.deleteMany();
}

async function addMovies() {
    movieData.forEach(async (movie) => {
        await prisma.movie.create({
            data: {
                ...movie
            }
        })
    })
    console.log('done')
}

async function updateMovie() {
    await prisma.movie.update({
        where: {
            name: 'Leave No Trace'
        },
        data: {
            imgUrlHorizontal: 'https://drive.google.com/uc?id=1C4osOOTCxaCgQV3kTt5TxJZQ68j76MXE&export=download'
        }
    })
    console.log('done');
}

// updateMovie()
// deleteMovie()
// createLiked();
// addMovies()









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


