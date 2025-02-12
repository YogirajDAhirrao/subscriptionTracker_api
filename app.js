import express from "express";

import { PORT } from "./config/env.js";

import userRouter from "./Routes/user.routes.js";
import authRouter from "./Routes/auth.route.js";
import subRouter from "./Routes/subscription.routes.js";
import connectDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import workflowRouter from "./Routes/workflow.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subRouter);
app.use("/api/v1/workflow", workflowRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, async () => {
  console.log(`at port ${PORT}`);
  await connectDB();
});

export default app;
