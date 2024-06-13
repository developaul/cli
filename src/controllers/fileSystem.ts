import * as fs from "fs";
import type { Enviroment } from "@/interfaces";

interface CreateFileArgs {
  filePath: string;
  variables: Enviroment[];
}

class FileSystemController {
  createFile({ filePath, variables }: CreateFileArgs) {
    const envFileContent = variables
      .map(({ key, value }) => `${key}=${value}`)
      .join("\n");

    fs.writeFileSync(`${filePath}/.env`, envFileContent);
  }
}

export const fileSystemController = new FileSystemController();
