import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function addBookings() {
    const user = await prisma.user.findUnique({ where: { username: "arnoboeni123" } })
    const movie = await prisma.movie.findUnique({ where: { name: 'Elio' } })


}

async function deleteAllBookings() {
    await prisma.userBooking.deleteMany()
    console.log('done')
}

// addBookings();
// deleteAllBookings()