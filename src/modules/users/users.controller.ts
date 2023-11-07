import { Router } from "express";
import { Controller } from "../../types";

export class UsersController implements Controller {
  private usersPath = "/users";
  private usersRouter = Router();

  constructor() {
    this.initRoutes();
  }

  get path() {
    return this.usersPath;
  }

  get router() {
    return this.usersRouter;
  }

  private initRoutes() {
    this.router.get("/", (req, res) => res.send("GET users"));
    this.router.get("/1", (req, res) => res.send("GET user 1"));
    this.router.post("/", (req, res) => res.send("POST user"));
  }
}
