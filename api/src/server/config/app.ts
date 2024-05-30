import express, { Express } from 'express'
import router from './routes'

export const setupApp = async (port: number): Promise<Express> => {
  const app = express()
  app.use(router)
  app.use(express.json())
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
  return app
}