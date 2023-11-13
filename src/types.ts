import { Router } from "express";

export interface Controller {
  path: string;
  router: Router;
}

export interface Module {
  controllers: Controller[];
}
