import inquirer from "inquirer";
import * as fs from "fs";

import { getImportEnviromentsQuestions } from "@/utils";
import type { ImportEnviromentsArgs } from "@/interfaces";

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
}

export const enviromentController = new EnviromentsController();
