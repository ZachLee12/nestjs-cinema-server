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
    const hallSize = hallSizeByIndex[getRandomInteger(3)]
    let numberOfSeats;
    switch (hallSize) {
        case 'BIG':
            numberOfSeats = 75

        case 'MEDIUM':
            numberOfSeats = 50

        case 'SMALL':
            numberOfSeats = 25
    }

    for await (let movie of movies) {
        try {
            await prisma.hall.create({
                data: {
                    hallSize: hallSize,
                    showtime: showTimes[getRandomInteger(showTimes.length)],
                    movie: {
                        connect: {
                            id: movie.id
                        }
                    },
                    numberOfSeats
                }
            })
        } catch (error) {
            console.log(error)
            continue
        }
    }
    console.log('done')

}

async function deleteAllHalls() {
    await prisma.hall.deleteMany()
}

function getRandomInteger(limit: number): number {
    return Math.floor(Math.random() * limit);
}
addHall()
// deleteAllHalls()