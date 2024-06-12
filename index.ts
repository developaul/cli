import inquirer from "inquirer";

import { getInitialQuestions } from "@/utils";
import { credentialsController, enviromentController } from "@/controllers";
import { initialOptions } from "@/interfaces";

const main = async () => {
  const { command } = await inquirer.prompt(getInitialQuestions());

  switch (command) {
    case initialOptions.ConfigureCredentials:
      credentialsController.configureCredentials();
      break;
    case initialOptions.ListCredentials:
      credentialsController.listCredentials();
      break;
    case initialOptions.ImportEnviroments:
      enviromentController.importEnviroments();
      break;

    default:
      console.warn("Invalid command");
      break;
  }
};

main();
