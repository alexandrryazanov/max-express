import { Request, Response, Router } from "express";
import { Controller } from "../../types";
import { OrdersService } from "./orders.service";

export class OrdersController implements Controller {
  public ordersPath = "/orders";
  private ordersRouter = Router();
  private service: OrdersService;

  constructor(service: OrdersService) {
    this.service = service;
    this.initRoutes();
  }

  get router() {
    return this.ordersRouter;
  }

  get path() {
    return this.ordersPath;
  }

  private initRoutes() {
    this.router.get("/", this.getAll);
    this.router.get("/:id", this.getOne);
  }

  getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.send(result);
  };

  getOne = async (req: Request, res: Response) => {
    const result = await this.service.getOne(+req.params.id);
    res.send(result);
  };
}
