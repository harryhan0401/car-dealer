import express from "express"
import {
    getSaleCars,
    getSaleCarById,
    getSaleCarsCount,
    getAllSaleCars
} from "../controllers/saleCarControllers"
const router = express.Router();

router.get("/", getSaleCars);
router.get("/all",getAllSaleCars);
router.get("/count", getSaleCarsCount);
router.get("/:saleCarId", getSaleCarById);

export default router;