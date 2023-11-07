import express from "express";
import { UsersController } from "./modules/users/users.controller";
import { OrdersController } from "./modules/orders/orders.controller";
import { Controller } from "./types";

const app = express();

const controllers: Controller[] = [
  new UsersController(),
  new OrdersController(),
];

controllers.forEach((controller) => {
  app.use(controller.path, controller.router);
});

app.listen(8080, () => console.log("Server started on port 8080"));
