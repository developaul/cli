import inquirer from "inquirer";
import * as fs from "fs";

import {
  getAddEnviromentQuestions,
  getImportEnviromentsQuestions,
  getRemoveEnviromentQuestions,
} from "@/utils";
import type {
  AddEnviromentArgs,
  ImportEnviromentsArgs,
  RemoveEnviromentArgs,
} from "@/interfaces";
import { EnviromentsAPI } from "@/services";
import { credentialsController } from "./credentials";

class EnviromentsController {
  async getStages() {}

  async importEnviroments() {
    // TODO: Call inquirer controller
    const enviromentsQuestions = getImportEnviromentsQuestions();

    const { filePath, stage, project } =
      await inquirer.prompt<ImportEnviromentsArgs>(enviromentsQuestions);

    // MANTENER ESTO
    const credentials = credentialsController.getCredentials();

    if (!credentials) {
      throw new Error("Credentials not found");
    }

    const enviromentsAPI = new EnviromentsAPI(credentials);

    const variables = await enviromentsAPI.getEnviroments({
      project,
      stage,
    });
    // HASTA AQUI

    // TODO: Call Fs controller
    const envFileContent = variables
      .map(({ key, value }) => `${key}=${value}`)
      .join("\n");

    fs.writeFileSync(`${filePath}/.env`, envFileContent);
  }

  async addEnviroment() {
    const enviromentsQuestions = getAddEnviromentQuestions();

    const { name, value, stage, project } =
      await inquirer.prompt<AddEnviromentArgs>(enviromentsQuestions);

    console.log({ name, value, stage, project });

    // TODO: CALL API SERVICE TO SAVE ENVIRONMENT
  }

  async removeEnviroment() {
    const enviromentsQuestions = getRemoveEnviromentQuestions();

    const { name, stage, project } =
      await inquirer.prompt<RemoveEnviromentArgs>(enviromentsQuestions);

    console.log({ name, stage, project });

    // TODO: CALL API SERVICE TO REMOVE ENVIRONMENT
  }
}

export const enviromentController = new EnviromentsController();
