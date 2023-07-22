import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function addUserBookings() {
    const user = await prisma.user.findUnique({ where: { username: "zachlee123" } })
    //lady bird, 8:00AM hall
    const movie = await prisma.movie.findUnique({ where: { id: "8c6e9f31-f5e4-4c2a-be26-99ad1204ba72" } })
    const hall = await prisma.hall.findUnique({ where: { id: "5a2d9619-b9fe-4823-a02e-888626b3f665" } })

    const seat1 = { rowId: 1, columnId: 1 }
    const seat2 = { rowId: 4, columnId: 2 }
    const userBooking = await prisma.userBooking.create({
        data: {
            hallId: hall.id,
            movieId: movie.id,
            userId: user.id,
            seatsBooked: [JSON.stringify(seat1), JSON.stringify(seat2)]
        }
    })
    console.log(userBooking)
}

async function deleteAllBookings() {
    await prisma.userBooking.deleteMany()
    console.log('done')
}
async function getUserBooking() {
    const userBooking = await prisma.userBooking.findUnique(
        {
            where: {
                id: "3199777a-7307-42b1-b7b4-044b7bacef6f"
            }
        }
    )
    console.log(userBooking)
}

// getUserBooking()
// addUserBookings();
deleteAllBookings()