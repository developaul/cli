import * as path from "path";
import * as os from "os";
import type { QuestionCollection } from "inquirer";

import {
  credentialsController,
  projectController,
  stageController,
} from "@/controllers";
import { initialOptions } from "@/interfaces";

export const configFilePath = path.join(
  os.homedir(),
  ".guardix",
  "config.json"
);

export const getInitialQuestions = (): QuestionCollection => {
  const disabled = !credentialsController.hasValidCredentials();

  return [
    {
      type: "list",
      name: "command",
      message: "What would you like to do?",
      choices: [
        {
          name: "Configure credentials",
          value: initialOptions.ConfigureCredentials,
        },
        {
          name: "List credentials",
          value: initialOptions.ListCredentials,
          disabled,
        },
        {
          name: "Add environment",
          value: initialOptions.AddEnviroment,
          disabled,
        },
        {
          name: "Remove environment",
          value: initialOptions.RemoveEnviroment,
          disabled,
        },
        {
          name: "Import environments",
          value: initialOptions.ImportEnviroments,
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
  const stages = stageController.getStages();
  const projects = projectController.getProjects();

  return [
    {
      type: "input",
      name: "filePath",
      message: "Enter the source file path:",
      default: ".",
    },
    {
      type: "list",
      name: "project",
      message: "Select the project to import:",
      choices: projects,
    },
    {
      type: "list",
      name: "stage",
      message: "Select the stage to import:",
      choices: stages,
    },
  ];
};

export const getAddEnviromentQuestions = (): QuestionCollection => {
  const stages = stageController.getStages();
  const projects = projectController.getProjects();

  return [
    {
      type: "list",
      name: "project",
      message: "Select the project to import:",
      choices: projects,
    },
    {
      type: "input",
      name: "name",
      message: "Enter the name of the environment:",
    },
    {
      type: "input",
      name: "value",
      message: "Enter the value of the environment:",
    },
    {
      type: "list",
      name: "stage",
      message: "Select the stage to import:",
      choices: stages,
    },
  ];
};

export const getRemoveEnviromentQuestions = (): QuestionCollection => {
  const stages = stageController.getStages();
  const projects = projectController.getProjects();

  return [
    {
      type: "list",
      name: "project",
      message: "Select the project to import:",
      choices: projects,
    },
    {
      type: "list",
      name: "stage",
      message: "Select the stage to import:",
      choices: stages,
    },
    {
      type: "input",
      name: "name",
      message: "Enter the variable name to remove:",
    },
  ];
};
