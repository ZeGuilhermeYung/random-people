import { Router } from "express";
import errorHandler from "../middlewares/error.handler";
import personRouter from "./person.routes";

const router = Router();

router.use(errorHandler);
router.use(personRouter);

export default router;