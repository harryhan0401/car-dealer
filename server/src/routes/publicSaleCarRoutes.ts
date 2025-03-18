import express from "express"
import {
    getSaleCars,
    getSaleCarById,
    getAllSaleCars
} from "../controllers/saleCarControllers"
const router = express.Router();

router.get("/", getSaleCars);
router.get("/all",getAllSaleCars);
router.get("/:saleCarId", getSaleCarById);

export default router;