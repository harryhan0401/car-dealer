import express from "express"
import {
    getSaleCars,
    getSaleCarById,
    getAllSaleCars,
    createSaleCar
} from "../controllers/saleCarControllers"
const router = express.Router();

router.get("/", getSaleCars);
router.get("/all",getAllSaleCars);
router.get("/:saleCarId", getSaleCarById);
router.post("/:cognitoId", createSaleCar);

export default router;