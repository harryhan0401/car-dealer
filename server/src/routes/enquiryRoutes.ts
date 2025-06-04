import express from "express"
import {
    createEnquiry
} from "../controllers/enquiryControllers"
const router = express.Router();

router.post("/:sellCarId", createEnquiry);

export default router;