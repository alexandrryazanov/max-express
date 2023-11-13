import { Request, Response, Router } from "express";
import { Controller } from "../../types";
import { UsersService } from "./users.service";

export class UsersController implements Controller {
  public usersPath = "/users";
  private ordersRouter = Router();
  private service: UsersService;

  constructor(service: UsersService) {
    this.service = service;
    this.initRoutes();
  }

  get router() {
    return this.ordersRouter;
  }

  get path() {
    return this.usersPath;
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
