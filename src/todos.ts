import express, {NextFunction, Request, Response} from 'express'
// import { PrismaClient } from '@prisma/client'
// import cors from 'cors'
//
// import jwt, {JwtPayload} from 'jsonwebtoken'
// import authMiddleware from "./middlewares/authMiddleware";

// const prisma = new PrismaClient()
const app = express()


// app.use(cors())
//
// app.use(express.json())
//
//
// app.get('/todos', authMiddleware, async (req: any, res) => {
//   const userId = req.userId
//
//   const result = await prisma.todo.findMany({where: {userId} ,orderBy: {id: 'asc'}})
//   res.send(result)
// })
//
// app.get('/todos/:id',  async (req, res) => {
//   const userId = Number(req.headers.userId)
//
//
//   const id = Number(req.params.id)
//   const result = await prisma.todo.findUnique({
//     where: { id },
//     include: {user: {select: {name: true}}}
//   })
//   res.send(result)
// })
//
// app.put('/todos', async (req, res) => {
//   const title = req.body.title
//   const body = req.body.body
//
//
//   const result = await prisma.todo.create({data: {title, body, userId: 1}})
//   res.send(result)
// })
//
// app.patch('/todos/:id', async (req, res) => {
//   const id = Number(req.params.id)
//
//   const title = req.body.title
//   const body = req.body.body
//   const completed = req.body.completed
//
//   const existid = await prisma.todo.findUnique({ where: { id }})
//
//   if (!existid) {
//     res.status(404).send("Такого id не существует")
//     return
//   }
//   const result = await prisma.todo.update({
//     where: {id},
//     data: {title, body, completed}
//   })
//   res.send(result)
// })
//
// app.delete('/todos/:id', async (req, res) => {
//   const userId = req.headers.userId
//
//   const id = Number(req.params.id)
//   const result = await prisma.todo.delete({ where: { id }})
//   res.send(result)
// })
//
// app.post('/login', async (req,res) => {
//   const email = req.body.email
//   const password = req.body.password
//
//   const user = await prisma.user.findUnique({where: {email}})
//   if (!user) {
//     res.status(404).send('User not found')
//     return
//   }
//
//   if (user.password !== password) {
//     res.status(401).send('Wrong password')
//     return
//   }
//
//   const token = jwt.sign({sub: user.id}, 'secret-key', {expiresIn: '2m'})
//
//    res.send({accessToken: token})
// })


app.listen(8080, ()=>console.log('Listen port 8080'))

//-------------------------------------------


