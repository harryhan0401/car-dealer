import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authMiddleware } from "./middleware/authMiddleware";

/* ROUTE IMPORT */
import userRoutes from "./routes/userRoutes";
import sellCarRoutes from "./routes/sellCarRoutes";
import carRoutes from "./routes/carRoutes";
import enquiryRoutes from "./routes/enquiryRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get('/', (req, res) => {
    res.send("This is home route");
})

app.use("/users", authMiddleware(["user"]), userRoutes);
app.use("/admins", authMiddleware(["admin"]), userRoutes);
app.use("/sellCars", sellCarRoutes);
app.use("/enquiries", authMiddleware(["user", "admin"]), enquiryRoutes);
app.use("/cars", authMiddleware(["user", "admin"]), carRoutes);

/* SERVER */
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})