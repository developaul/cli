import inquirer from "inquirer";
import {
  getAddEnviromentQuestions,
  getImportEnviromentsQuestions,
  getRemoveEnviromentQuestions,
} from "@/utils";
import type {
  AddEnviromentAnswers,
  ImportEnviromentsAnswers,
  RemoveEnviromentAnswers,
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

  getRemoveEnviromentAnswers(): Promise<RemoveEnviromentAnswers> {
    const enviromentsQuestions = getRemoveEnviromentQuestions();

    return inquirer.prompt<RemoveEnviromentAnswers>(enviromentsQuestions);
  }
}

export const inquirerController = new InquirerController();
