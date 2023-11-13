import express from "express";
import { AppModule } from "./modules/app.module";

const app = express();

const appModule = new AppModule();

appModule.controllers.forEach((controller) => {
  app.use(controller.path, controller.router);
});

app.listen(8080, () => console.log("Server started on port 8080"));
