import express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/users-controller";
import { PrismaUserRepository } from "./repositories/users";
import { PrismaProcessRepository } from "./repositories/process";
import { ProcessController } from "./controllers/process/process-controller";
import cors from "cors";
import { PrismaPetitionRepository } from "./repositories/petition";
import { PetitionController } from "./controllers/petition/petition-controller";
import { FinanceController } from "./controllers/finance/finance-controller";
import { PrismaFinanceRepository } from "./repositories/finance";

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
    const createdProcess = await processController.postProcess(processData);
    res.status(201).json(createdProcess);
  } catch (error) {
    res.status(500).json({ error: "Error creating process" });
  }
});

app.get("/petition", async (req, res) => {
  try {
    const prismaPetitionRepository = new PrismaPetitionRepository();
    const petitionController = new PetitionController(prismaPetitionRepository);

    const getPetition = await petitionController.getPetition();
    res.status(200).send(getPetition);
  } catch (error) {
    console.error("Error fetching petitions:", error);
    res.status(500).json({ error: "Error fetching petitions" });
  }
});

app.post("/petition", async (req, res) => {
  const prismaPetityRepository = new PrismaPetitionRepository();
  const petitionController = new PetitionController(prismaPetityRepository);

  try {
    const petitionData = req.body;
    const createdPetition = await petitionController.postPetition(petitionData);
    res.status(201).json(createdPetition);
  } catch (error) {
    res.status(500).json({ error: "Error creating petition" });
  }
});

app.get("/finance", async (req, res) => {
  try {
    const prismaFinanceRepository = new PrismaFinanceRepository();
    const financeController = new FinanceController(prismaFinanceRepository);

    const getFinance = await financeController.getFinance();
    res.status(200).send(getFinance);
  } catch (error) {
    console.error("Error fetching getFinances:", error);
    res.status(500).json({ error: "Error fetching getFinances" });
  }
});

app.listen(port, () => console.log(`listening on ports ${port}!`));
