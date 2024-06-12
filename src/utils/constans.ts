import type { QuestionCollection } from "inquirer";

import { credentialsController, stageController } from "@/controllers";
import { initialOptions } from "@/interfaces";

export const getInitialQuestions = (): QuestionCollection => {
  const disabled = !credentialsController.isValidCredentials();

  return [
    {
      type: "list",
      name: "command",
      message: "What would you like to do?",
      choices: [
        {
          name: "Configure credentials",
          value: initialOptions.Configure,
        },
        {
          name: "List credentials",
          value: initialOptions.List,
          disabled,
        },
        {
          name: "Import credentials",
          value: initialOptions.Import,
          disabled,
        },
      ],
    },
  ];
};

export const credentialsQuestions = [
  {
    type: "input",
    name: "username",
    message: "Username",
  },
  {
    type: "password",
    name: "password",
    message: "Password",
  },
];

export const getImportEnviromentsQuestions = (): QuestionCollection => {
  const choices = stageController.getStages();

  return [
    {
      type: "input",
      name: "filePath",
      message: "Enter the source file path:",
      default: ".",
    },
    {
      type: "list",
      name: "stage",
      message: "Select the stage to import into:",
      choices,
    },
  ];
};
