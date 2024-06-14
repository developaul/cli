import type { IContext } from "@/interfaces";
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

  async removeEnviroment(context: IContext) {
    const answers = await inquirerController.getRemoveEnviromentAnswers();

    await context.dataSource.enviromentsAPI.removeEnviroment(answers);
  }
}

export const enviromentController = new EnviromentsController();
