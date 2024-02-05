import express, { Router } from "express";
import userRouter from "./userRoutes";
import applicationRouter from "./applicationRoutes";
import postRouter from "./postRoutes";

const appRoutes = express();

export const router = Router();
router.get("/", (req, res) => {
  res.send("API is working :)");
});

appRoutes.use("/user", userRouter);
appRoutes.use("/application", applicationRouter);
appRoutes.use("/post", postRouter);
appRoutes.use("/", router);

export default appRoutes;
