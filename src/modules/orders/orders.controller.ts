import { Router } from "express";
import { Controller } from "../../types";

export class OrdersController implements Controller {
  public path = "/orders";
  private ordersRouter = Router();

  constructor() {
    this.initRoutes();
  }

  get router() {
    return this.ordersRouter;
  }

  test() {}

  private initRoutes() {
    this.router.get("/", (req, res) => res.send("GET orders"));
    this.router.get("/1", (req, res) => res.send("GET order 1"));
    this.router.post("/", (req, res) => res.send("POST order"));
  }
}
