import type { QuestionCollection } from "inquirer";

import { credentialsController } from "@/controllers";
import { initialOptions } from "@/interfaces";

export const getInitialQuestions = (): QuestionCollection => {
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
          disabled: !credentialsController.isValidCredentials(),
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
