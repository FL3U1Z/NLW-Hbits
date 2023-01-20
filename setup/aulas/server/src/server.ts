import fastify from "fastify";
import cors from "@fastify/cors";
import {PrismaClient} from "@prisma/client";

const app = fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/hello', async() => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Me'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333
}).then(() => { 
    console.log('Server running on port 3333')
})
