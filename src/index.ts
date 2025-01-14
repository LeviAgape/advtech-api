import express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { PrismaUserRepository } from "./repositories/get-users";

config();
const app = express();

const port = process.env.PORT || 8000;

app.get("/users", async (req, res) => {
  const prismaUserRepository = new PrismaUserRepository();

  const getUsersController = new GetUsersController(prismaUserRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

app.get("/list", async (req, res) => {
  const prismaUserRepository = new PrismaUserRepository();

  const getUsersController = new GetUsersController(prismaUserRepository);

  const { body, statusCode } = await getUsersController.getAllUsers();

  res.send(body).status(statusCode);
});

app.get("/id/:id", async (req, res) => {

  const { id } = req.params;

  const prismaUserRepository = new PrismaUserRepository();

  const getUsersController = new GetUsersController(prismaUserRepository)

  const { body, statusCode } = await getUsersController.findById(id);

  res.send(body).status(statusCode);

})

app.listen(port, () => console.log(`listening on ports ${port}!`));
