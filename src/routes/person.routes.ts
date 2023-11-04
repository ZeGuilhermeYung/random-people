import getPerson from "../controllers/person.controllers";
import { Router } from "express";

const personRouter = Router();

personRouter.get('/person', getPerson);

export default personRouter;