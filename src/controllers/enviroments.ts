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

class EnviromentsController {
  async getStages() {}

  async importEnviroments() {
    const enviromentsQuestions = getImportEnviromentsQuestions();

    const { filePath, stage, project } =
      await inquirer.prompt<ImportEnviromentsArgs>(enviromentsQuestions);

    console.log({ filePath, stage, project });

    // TODO: CALL API SERVICE HERE BY STAGE AND PROJECT AND TOKEN
    const variables =
      "OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

    fs.writeFileSync(`${filePath}/.env`, variables);
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
