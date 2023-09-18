import express from "express";
import "express-async-errors";
import cors from "cors";
import router from './routers/index.router';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));