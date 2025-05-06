import express from "express"
import {
    getSaleCars,
    getSaleCarById,
    getAllSaleCars,
    createSaleCar,
    deleteSaleCar
} from "../controllers/saleCarControllers"
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getSaleCars);
router.get("/all", getAllSaleCars);
router.get("/:saleCarId", getSaleCarById);
router.post("/", authMiddleware(["user", "admin"]), upload.array("photos"), createSaleCar);
//Delete sale car
router.delete("/:saleCarId", authMiddleware(["user", "admin"]), deleteSaleCar);

export default router;