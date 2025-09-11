import express from "express"
import {
    getUser,
    createUser,
    addUserProfile,
    updateFavourite
} from "../controllers/userControllers"
import multer from "multer";
const router = express.Router();
const upload = multer();

router.get("/:cognitoId", getUser);
router.post("/", createUser);
router.put("/:cognitoId", upload.array("avatarUrl"), addUserProfile)
router.patch("/:cognitoId/favourites", updateFavourite);
router.delete("/:cognitoId/favourites", updateFavourite);

export default router;