import inquirer from "inquirer";

import { getInitialQuestions } from "@/utils";
import { credentialsController } from "@/controllers";
import { initialOptions } from "@/interfaces";

const main = async () => {
  const { command } = await inquirer.prompt(getInitialQuestions());

  switch (command) {
    case initialOptions.Configure:
      credentialsController.configureCredentials();
      break;
    case initialOptions.List:
      credentialsController.listCredentials();
      break;
    default:
      console.warn("Invalid command");
      break;
  }
};

main();
