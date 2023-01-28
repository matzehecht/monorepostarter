import express from "express";
import { api } from "./api";
import * as dotenv from "dotenv";
import { existsSync } from "fs";
import pino from "pino-http";

const STATIC_DIR = `${__dirname}/static` as const;
const PORT = process.env.API_PORT ?? 3000;
const hasStatic = existsSync(`${STATIC_DIR}`);

dotenv.config();

const app = express();

app.use(
  pino({
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  })
);

app.use("/api", api);

if (hasStatic) {
  app.use(express.static(STATIC_DIR));
}

app.listen(3000);

console.log(`Server running on port ${PORT}`);

if (hasStatic) {
  console.log(`Access your static site on http://localhost:${PORT}/`);
}
