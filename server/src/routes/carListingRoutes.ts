import express from "express"
import {
    getCarListings,
    getCarListingById,
    createCarListing,
    deleteCarListing
} from "../controllers/carListingControllers"
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getCarListings);
router.get("/:carListingId", getCarListingById);
router.post("/", authMiddleware(["user", "admin"]), upload.array("photos"), createCarListing);
//Delete sale car
router.delete("/:carListingId", authMiddleware(["user", "admin"]), deleteCarListing);

export default router;