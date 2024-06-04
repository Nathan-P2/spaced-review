import { Router } from "express";
import { adaptRoute } from "../../adapters/express-route-adapter";
import { CreateCardController } from "../controllers/CreateCardController";

export default (): Router => {
  const router = Router();

  router.post('/createCard', adaptRoute(new CreateCardController()))

  return router
}