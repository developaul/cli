import inquirer from "inquirer";

import {
  getAddEnviromentQuestions,
  getRemoveEnviromentQuestions,
} from "@/utils";
import type {
  AddEnviromentArgs,
  IContext,
  RemoveEnviromentArgs,
} from "@/interfaces";
import { fileSystemController } from "./fileSystem";
import { inquirerController } from "./inquirer";

class EnviromentsController {
  async getStages() {}

  async importEnviroments(context: IContext) {
    const { filePath, stage, project } =
      await inquirerController.getImportEnviromentsAnswers();

    const variables = await context.dataSource.enviromentsAPI.getEnviroments({
      project,
      stage,
    });

    fileSystemController.createFile({
      filePath,
      variables,
    });
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
