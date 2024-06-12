import inquirer from "inquirer";

class InquirerController {
  async configureCredentials() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your username:",
      },
      {
        type: "password",
        name: "password",
        message: "Enter your password:",
      },
    ]);

    // Guardar credenciales en un archivo o base de datos
    console.log("Credentials configured:", answers);
    // Lógica para guardar las credenciales
  }

  async listCredentials() {
    // Lógica para listar las credenciales
    console.log("Credentials list:");
  }
}

export const inquirerController = new InquirerController();
