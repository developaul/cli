#! /usr/bin/env bun

import inquirer from "inquirer";

import { getInitialQuestions } from "@/utils";
import { credentialsController, enviromentController } from "@/controllers";
import { initialOptions } from "@/interfaces";
import { getContext } from "@/middlewares";

const main = async () => {
  const { command } = await inquirer.prompt(getInitialQuestions());

  const context = getContext();

  switch (command) {
    case initialOptions.ConfigureCredentials:
      credentialsController.configureCredentials();
      break;

    case initialOptions.ListCredentials:
      credentialsController.listCredentials();
      break;

    case initialOptions.AddEnviroment:
      enviromentController.addEnviroment(context);
      break;

    case initialOptions.RemoveEnviroment:
      enviromentController.removeEnviroment();
      break;

    case initialOptions.ImportEnviroments:
      enviromentController.importEnviroments(context);
      break;

    default:
      console.warn("Invalid command");
      break;
  }
};

main();
