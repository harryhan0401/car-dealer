import express from "express"
import {
    deleteEnquiry,
    getEnquiries,
    upsertEnquiry,
} from "../controllers/enquiryControllers"
const router = express.Router();

router.post("/", getEnquiries)
router.put("/:carListingId", upsertEnquiry);
router.delete("/:referenceCode", deleteEnquiry);

export default router;