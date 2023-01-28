import { Api } from "@monorepostarter/utils";
import { RequestHandler } from "express";

export const getTest: RequestHandler<void, Api.TestGet> = (req, res, next) => {
  res.send({
    foo: "bar",
  });
};
