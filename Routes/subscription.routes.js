import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptionDetails,
} from "../controllers/subscriptions.controller.js";

const subRouter = Router();

subRouter.get("/", (req, res) => {
  res.send({ title: "get all subs" });
});
subRouter.get("/:id", (req, res) => {
  res.send({ title: "get all subs details" });
});
subRouter.post("/", authorize, createSubscription);
subRouter.put("/:id", (req, res) => {
  res.send({ title: "update sub" });
});
subRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete a" });
});
subRouter.get("/user/:id", authorize, getUserSubscriptionDetails);
subRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "cancel subscriptions" });
});
subRouter.get("/upcomig-renewals", (req, res) => {
  res.send({ title: "get upcoming renewals" });
});
export default subRouter;
