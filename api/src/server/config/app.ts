import express, { Express } from 'express'
import router from './routes'
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../../../swagger_output.json";

export const setupApp = async (port: number): Promise<Express> => {
  const app = express()
  app.use(router)
  app.use(express.json())
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
  return app
}