import { Router } from "express";
import { CreateSubjectController } from "../controllers/CreateSubjectController";

const subjectRouter = Router()

const controllerObject = new CreateSubjectController

subjectRouter.post('/subject', controllerObject.handle)

export default subjectRouter