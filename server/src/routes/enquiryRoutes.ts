import express from "express"
import {
    getEnquiries,
    createEnquiry,
    updateEnquiry
} from "../controllers/enquiryControllers"
const router = express.Router();

router.post("/", getEnquiries)
router.post("/:sellCarId", createEnquiry);
router.put("/:enquiryId", updateEnquiry);

export default router;