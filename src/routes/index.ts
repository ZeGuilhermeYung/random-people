import { Router } from "express";
import errorHandler from "../middlewares/error.handler";
import personRouter from "./person.routes";

const router = Router();

router.use(personRouter);
router.use(errorHandler);

export default router;