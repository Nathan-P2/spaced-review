import cardsRoutes from "@src/app/modules/cards/routes/cards.routes";
import { Router } from "express";

const router = Router();

router.use(cardsRoutes(router))

export default router