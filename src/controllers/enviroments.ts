import inquirer from "inquirer";

import { getRemoveEnviromentQuestions } from "@/utils";
import type { IContext, RemoveEnviromentArgs } from "@/interfaces";
import { fileSystemController } from "./fileSystem";
import { inquirerController } from "./inquirer";

class EnviromentsController {
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

  async addEnviroment(context: IContext) {
    const answers = await inquirerController.getAddEnviromentAnswers();

    await context.dataSource.enviromentsAPI.addEnviroment(answers);
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
