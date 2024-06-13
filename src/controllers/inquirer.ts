import inquirer from "inquirer";
import { getImportEnviromentsQuestions } from "@/utils";
import type { ImportEnviromentsAnswers } from "@/interfaces";

class InquirerController {
  getImportEnviromentsAnswers(): Promise<ImportEnviromentsAnswers> {
    const enviromentsQuestions = getImportEnviromentsQuestions();

    return inquirer.prompt<ImportEnviromentsAnswers>(enviromentsQuestions);
  }
}

export const inquirerController = new InquirerController();
