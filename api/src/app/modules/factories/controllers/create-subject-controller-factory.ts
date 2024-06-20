import { Controller } from "@src/app/presentation/protocols/controller";
import { CreateSubjectController } from "../../subject/controllers/CreateSubjectController";

export const makeCreateSubjectController = (): Controller => {
  const controller = new CreateSubjectController();
  return controller;
}