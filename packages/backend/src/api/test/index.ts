import { Router } from "express";
import { getTest } from "./get";

const test = Router();

test.get("/", getTest);

export { test };
