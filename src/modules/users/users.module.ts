import { Controller, Module } from "../../types";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

export class UsersModule implements Module {
  private userControllers: Controller[];

  constructor() {
    //services
    const usersService = new UsersService();

    //controllers
    this.userControllers = [new UsersController(usersService)];
  }

  get controllers() {
    return this.userControllers;
  }
}
