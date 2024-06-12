import * as fs from "fs";
import inquirer from "inquirer";
import { credentialsQuestions } from "@/utils";
import type { Credentials } from "@/interfaces";

class CredentialsController {
  async saveCredentials({ username, password }: Credentials) {
    const hashedPassword = await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 4,
    });

    const credentialsJson = JSON.stringify(
      {
        username,
        password: hashedPassword,
      },
      null,
      2
    );

    fs.writeFileSync("./credentials.json", credentialsJson, "utf-8");
  }

  async loadCredentials() {
    const credentialsJson = fs.readFileSync("./credentials.json", "utf-8");

    return JSON.parse(credentialsJson);
  }

  async configureCredentials() {
    const { username, password } = await inquirer.prompt(credentialsQuestions);

    await this.saveCredentials({ username, password });
  }

  async listCredentials() {
    const credentials = await this.loadCredentials();

    console.table(credentials);
  }

  async isValidCredentials() {
    const credentials = await this.loadCredentials();

    return credentials !== null;
  }
}

export const credentialsController = new CredentialsController();
