import type {
  AddEnviromentAnswers,
  Credentials,
  Enviroment,
  ImportEnviromentsAnswers,
} from "@/interfaces";
import DataSource from "./DataSource";
import { baseConfig } from "@/utils";

class EnviromentsAPI extends DataSource {
  constructor(credentials: Credentials) {
    super(baseConfig.services.enviroments.apiUrl, credentials);
  }

  getEnviroments(
    args: Pick<ImportEnviromentsAnswers, "stage" | "project">
  ): Promise<Enviroment[]> {
    const { project, stage } = args;

    const searchParams = new URLSearchParams({
      project,
      stage,
    });

    const searchParamsString = searchParams.toString();

    return this.get<Enviroment[]>(`/enviroments?${searchParamsString}`);
  }

  addEnviroment(args: AddEnviromentAnswers) {
    return this.post<Enviroment>(`/enviroments`, args);
  }
}

export default EnviromentsAPI;
