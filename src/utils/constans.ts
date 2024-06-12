import { initialOptions } from "@/interfaces";

export const initialQuestions = [
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
      },
    ],
  },
];

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
