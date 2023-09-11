import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()

app.use(cors())

app.use(express.json())


app.get('/todos', async (req, res) => {
  const result = await prisma.todo.findMany({orderBy: {id: 'asc'}})
  res.send(result)
})

app.get('/todos/:id', async (req, res) => {
  const id = Number(req.params.id)
  const result = await prisma.todo.findUnique({ where: { id }})
  res.send(result)
})

app.put('/todos', async (req, res) => {
  const title = req.body.title
  const body = req.body.body

  const result = await prisma.todo.create({data: {title, body}})
  res.send(result)
})

app.patch('/todos/:id', async (req, res) => {
  const id = Number(req.params.id)

  const title = req.body.title
  const body = req.body.body
  const completed = req.body.completed

  const existid = await prisma.todo.findUnique({ where: { id }})

  if (!existid) {
    res.status(404).send("Такого id не существует")
    return
  }
  const result = await prisma.todo.update({
    where: {id},
    data: {title, body, completed}
  })
  res.send(result)
})

app.delete('/todos/:id', async (req, res) => {
  const id = Number(req.params.id)
  const result = await prisma.todo.delete({ where: { id }})
  res.send(result)
})

app.listen(8080, ()=>console.log('Listen port 8080'))
