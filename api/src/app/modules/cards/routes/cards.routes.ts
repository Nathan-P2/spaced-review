import { Router } from "express";
import { adaptRoute } from "../../adapters/express-route-adapter";
import { CreateCardController } from "../controllers/CreateCardController";

export default (router: Router): Router => {
  router.get('/createCard', adaptRoute(new CreateCardController()))

  return router
}