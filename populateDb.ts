import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createUser() {
    const user = await prisma.user.create({
        data: {
            firstname: "Zach",
            lastname: "Lee",
            username: "zachlee123",
            password: "iLoveSushi%",
            age: 25,
            birthday: new Date("1999-03-14")
        }
    })
    console.log(user)
}

async function deleteUser(username: string) {
    const deletedUser = await prisma.user.delete({
        where: {
            username: "zachlee123"
        }
    })
    console.log("done")
}


