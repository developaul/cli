import inquirer from "inquirer";
import {
  getAddEnviromentQuestions,
  getImportEnviromentsQuestions,
} from "@/utils";
import type {
  AddEnviromentAnswers,
  ImportEnviromentsAnswers,
} from "@/interfaces";

class InquirerController {
  getImportEnviromentsAnswers(): Promise<ImportEnviromentsAnswers> {
    const enviromentsQuestions = getImportEnviromentsQuestions();

    return inquirer.prompt<ImportEnviromentsAnswers>(enviromentsQuestions);
  }

  getAddEnviromentAnswers(): Promise<AddEnviromentAnswers> {
    const enviromentsQuestions = getAddEnviromentQuestions();

    return inquirer.prompt<AddEnviromentAnswers>(enviromentsQuestions);
  }
}

export const inquirerController = new InquirerController();
