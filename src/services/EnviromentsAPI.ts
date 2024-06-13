import type { Credentials, Enviroment } from "@/interfaces";
import DataSource from "./DataSource";
import { baseConfig } from "@/utils";

interface GetEnviromentsArgs {
  project: string;
  stage: string;
}

class EnviromentsAPI extends DataSource {
  constructor(credentials: Credentials) {
    super(baseConfig.services.enviroments.apiUrl, credentials);
  }

  getEnviroments(args: GetEnviromentsArgs): Promise<Enviroment[]> {
    const { project, stage } = args;

    const searchParams = new URLSearchParams({
      project,
      stage,
    });

    const searchParamsString = searchParams.toString();

    return this.get<Enviroment[]>(`/enviroments?${searchParamsString}`);
  }
}

export default EnviromentsAPI;
