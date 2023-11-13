import { UsersModule } from "./users/users.module";
import { OrdersModule } from "./orders/orders.module";
import { Controller, Module } from "../types";

export class AppModule implements Module {
  private appControllers: Controller[] = [];

  constructor() {
    const modules = [UsersModule, OrdersModule];

    modules.forEach((Module) => {
      const moduleControllers = new Module().controllers;
      const modulePaths = moduleControllers.map((m) => m.path).join(", ");

      this.appControllers.push(...moduleControllers);
      console.log(`Endpoints for ${modulePaths} are ready`);
    });
  }

  get controllers() {
    return this.appControllers;
  }
}
