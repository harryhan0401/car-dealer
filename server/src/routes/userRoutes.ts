import express from "express"
import {
    getUser,
    createUser,
    addFavourite
} from "../controllers/userControllers"
const router = express.Router();

router.get("/:cognitoId", getUser);
router.post("/", createUser);
router.patch("/:cognitoId/favourites", addFavourite);

export default router;