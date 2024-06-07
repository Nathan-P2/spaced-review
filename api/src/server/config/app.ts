import express, { Express } from 'express'
import router from './routes'
import mongoose from 'mongoose'

export const setupApp = async (port: number): Promise<Express> => {
  const app = express()
  app.use(router)
  app.use(express.json())
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
  mongoose.connect('mongodb+srv://neite:CcOWZZXP0kr9Modx@teste.pbymplg.mongodb.net/?retryWrites=true&w=majority&appName=Teste')
  return app
}