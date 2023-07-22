import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
enum HallSize {
    Small = 'SMALL',
    Medium = 'MEDIUM',
    Big = 'BIG'
}

const hallSizeByIndex = {
    0: HallSize.Small,
    1: HallSize.Medium,
    2: HallSize.Big
};

async function addHall() {
    const movies = await prisma.movie.findMany()
    const showTimes = ["08:00 AM", "10:00 AM", "12:00 PM", "14:00 PM", "16:00 PM", "18:00 PM", "20:00 PM", "22:00 PM", "24:00 PM"]
    let hallSize = hallSizeByIndex[getRandomInteger(3)]
    let numberOfSeats;
    switch (hallSize) {
        case 'BIG':
            numberOfSeats = 75
            break;

        case 'MEDIUM':
            numberOfSeats = 50
            break;

        case 'SMALL':
            numberOfSeats = 25
            break;
    }
    let counter = 0
    for await (let movie of movies) {
        console.log(movie.name)
        for await (let showtime of movie.showtimes) {
            console.log(showtime)
            for (let i = 0; i < getRandomInteger(6); i++) {
                try {
                    await prisma.hall.create({
                        data: {
                            hallSize: hallSize,
                            showtime: showtime,
                            movie: {
                                connect: {
                                    id: movie.id
                                }
                            },
                            numberOfSeats
                        }
                    })
                } catch (error) {
                    continue
                }
                hallSize = hallSizeByIndex[getRandomInteger(3)]
                switch (hallSize) {
                    case 'BIG':
                        numberOfSeats = 75
                        break;

                    case 'MEDIUM':
                        numberOfSeats = 50
                        break;

                    case 'SMALL':
                        numberOfSeats = 25
                        break;
                }

            }
        }
    }
    console.log('done')
}

async function deleteAllHalls() {
    await prisma.hall.deleteMany()
    console.log('done')
}

function getRandomInteger(limit: number): number {
    return Math.floor(Math.random() * limit);
}
// deleteAllHalls()
addHall()