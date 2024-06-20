import { Router } from "express";
import { makeCreateSubjectController } from "../../factories/controllers/create-subject-controller-factory";

const subjectRouter = Router()

subjectRouter.post('/subject', makeCreateSubjectController().handle)

export default subjectRouter