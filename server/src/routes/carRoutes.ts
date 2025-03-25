import express from "express"
import {
    createCar
} from "../controllers/carControllers"
import multer from "multer";
const router = express.Router();
const upload = multer();

router.post("/", upload.none(), createCar);

export default router;