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
