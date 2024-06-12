import inquirer from "inquirer";

import { initialQuestions } from "@/utils";
import { inquirerController } from "@/controllers";
import { initialOptions } from "@/interfaces";

const main = async () => {
  const { command } = await inquirer.prompt(initialQuestions);

  switch (command) {
    case initialOptions.Configure:
      inquirerController.configureCredentials();
      break;
    case initialOptions.List:
      inquirerController.listCredentials();
      break;
    default:
      console.warn("Invalid command");
      break;
  }
};

main();
