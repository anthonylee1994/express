import * as express from "express";
import {DefaultController} from "../controllers/DefaultController";

const router = express.Router();

/* GET home page. */
router.get("/", DefaultController.Index);

export default router;
