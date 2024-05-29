import { Router } from "express";
import { adaptRoute } from "../../adapters/express-route-adapter";
import { CreateCardController } from "../controllers/CreateCardController";

export default (router: Router): void => {
  router.post('/createCard', adaptRoute(new CreateCardController()))
}