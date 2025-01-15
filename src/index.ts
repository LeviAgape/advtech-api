import express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/users-controller";
import { PrismaUserRepository } from "./repositories/users";
import { PrismaProcessRepository } from "./repositories/process";
import { ProcessController } from "./controllers/process/process-controller";
import cors from 'cors';

config();
const app = express();

app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:5173", // Substitua pela URL do front-end
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
  })
);

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

  const getUsersController = new GetUsersController(prismaUserRepository);

  const { body, statusCode } = await getUsersController.findById(id);

  res.send(body).status(statusCode);
});

app.get("/process", async (req, res) => {
  const prismaProcessRepository = new PrismaProcessRepository();

  const getProcessController = new ProcessController(prismaProcessRepository);

  const getProcess = await getProcessController.getProcess();

  res.send(getProcess).status(200);
});

app.post("/process", async (req, res) => {
  const prismaProcessRepository = new PrismaProcessRepository();
  const processController = new ProcessController(prismaProcessRepository);

  try {
    const processData = req.body;
    const createdProcess = await processController.postProcess(req, res);
    res.status(201).json(createdProcess);
  } catch (error) {
    res.status(500).json({ error: "Error creating process" });
  }
});

app.listen(port, () => console.log(`listening on ports ${port}!`));
