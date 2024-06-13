import * as fs from "fs";
import * as path from "path";
import inquirer from "inquirer";
import { configFilePath, credentialsQuestions } from "@/utils";
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

    const configDir = path.dirname(configFilePath);

    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    fs.writeFileSync(configFilePath, credentialsJson, "utf-8");
  }

  getCredentials(): Credentials | null {
    try {
      const credentialsJson = fs.readFileSync(configFilePath, "utf-8");

      return JSON.parse(credentialsJson);
    } catch (error) {
      return null;
    }
  }

  async configureCredentials() {
    const { username, password } = await inquirer.prompt<Credentials>(
      credentialsQuestions
    );

    await this.saveCredentials({ username, password });
  }

  async listCredentials() {
    const credentials = this.getCredentials();

    console.table(credentials);
  }

  hasValidCredentials(): boolean {
    const credentials = this.getCredentials();

    return credentials !== null;
  }
}

export const credentialsController = new CredentialsController();
