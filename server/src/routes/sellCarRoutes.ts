import express from "express"
import {
    getSellCars,
    getSellCarById,
    createSellCar,
    deleteSellCar
} from "../controllers/sellCarControllers"
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getSellCars);
router.get("/:sellCarId", getSellCarById);
router.post("/", authMiddleware(["user", "admin"]), upload.array("photos"), createSellCar);
//Delete sale car
router.delete("/:sellCarId", authMiddleware(["user", "admin"]), deleteSellCar);

export default router;