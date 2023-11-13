import { Controller, Module } from "../../types";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";

export class OrdersModule implements Module {
  private ordersControllers: Controller[];

  constructor() {
    //services
    const ordersService = new OrdersService();

    //controllers
    this.ordersControllers = [new OrdersController(ordersService)];
  }

  get controllers() {
    return this.ordersControllers;
  }
}
