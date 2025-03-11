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
import { PrismaPaymentProcessRepository } from "./repositories/paymentProcess";
import { PaymentProcessController } from "./controllers/paymentProcess/paymentProcess-controller";

config();

class Server {
  private app = express();
  private port = process.env.PORT || 8000;

  private prismaUserRepository = new PrismaUserRepository();
  private prismaProcessRepository = new PrismaProcessRepository();
  private prismaPetitionRepository = new PrismaPetitionRepository();
  private prismaFinanceRepository = new PrismaFinanceRepository();
  private prismaPaymentProcessRepository = new PrismaPaymentProcessRepository();

  private getUsersController = new GetUsersController(
    this.prismaUserRepository
  );
  private processController = new ProcessController(
    this.prismaProcessRepository
  );
  private petitionController = new PetitionController(
    this.prismaPetitionRepository
  );
  private financeController = new FinanceController(
    this.prismaFinanceRepository
  );
  private paymentProcessController = new PaymentProcessController(
    this.prismaPaymentProcessRepository
  );

  constructor() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
    this.routes();
  }

  private routes() {
    this.app.get("/user/:name", async (req, res) => {
      const { name } = req.params;
      const getNameByLogin = await this.getUsersController.getUserByLogin(name);
      res.status(200).send(getNameByLogin);
    });

    this.app.get("/process/:defendantName", async (req, res) => {
      const { defendantName } = req.params;
      const processes =
        await this.processController.getProcessByDefendantName(defendantName);
      res.status(200).send(processes);
    });

    this.app.get("/user", async (req, res) => {
      const getListUser = await this.getUsersController.getAllUsers();
      res.status(200).send(getListUser);
    });

    this.app.get("/id/:id", async (req, res) => {
      const { id } = req.params;
      const findUser = await this.getUsersController.findById(id);
      res.status(200).send(findUser);
    });

    this.app.get("/paymentProcess", async (req, res) => {
      const getListPayment =
        await this.paymentProcessController.getPaymentProcess();
      res.status(200).send(getListPayment);
    });

    this.app.post("/finance/paymentProcess/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const paymentData = req.body;

        const newPayment =
          await this.paymentProcessController.postPaymentProcess(
            id,
            paymentData
          );

        res.status(200).send(newPayment);
      } catch (error) {
        console.error("Erro ao criar pagamento:", error);
        res.status(500).send({ error: "Erro creating payment" });
      }
    });

    this.app.get("/process", async (req, res) => {
      const processes = await this.processController.getProcess();
      res.status(200).send(processes);
    });

    this.app.post("/process", async (req, res) => {
      try {
        const processData = req.body;
        const createdProcess =
          await this.processController.postProcess(processData);
        res.status(201).json(createdProcess);
      } catch (error) {
        res.status(500).json({ error: "Error creating process" });
      }
    });

    this.app.get("/petition", async (req, res) => {
      try {
        const petitions = await this.petitionController.getPetition();
        res.status(200).send(petitions);
      } catch (error) {
        res.status(500).json({ error: "Error fetching petitions" });
      }
    });

    this.app.post("/petition", async (req, res) => {
      try {
        const petitionData = req.body;
        const createdPetition =
          await this.petitionController.postPetition(petitionData);
        res.status(201).json(createdPetition);
      } catch (error) {
        res.status(500).json({ error: "Error creating petition" });
      }
    });

    this.app.get("/finance", async (req, res) => {
      try {
        const finances = await this.financeController.getFinance();
        res.status(200).send(finances);
      } catch (error) {
        res.status(500).json({ error: "Error fetching finances" });
      }
    });

    this.app.put("/petition/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const data = req.body;
        const updatedPetition = await this.petitionController.putPetition(
          id,
          data
        );
        res.status(200).send(updatedPetition);
      } catch (error) {
        res.status(500).json({ error: "Error updating petition" });
      }
    });

    this.app.put("/process/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const data = req.body;
        const updatedProcess = await this.processController.putProcess(
          id,
          data
        );
        res.status(200).send(updatedProcess);
      } catch (error) {
        res.status(500).json({ error: "Error updating process" });
      }
    });
  }

  public start() {
    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}!`)
    );
  }
}

const server = new Server();
server.start();
