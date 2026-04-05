import {Router} from "express";
import { getComments } from "../controllers/commentController";

const router = Router();

router.get("/", getComments);
//router.post("/", postComment);

export default router;
