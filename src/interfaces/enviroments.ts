export interface ImportEnviromentsArgs {
  filePath: string;
  stage: string;
  project: string;
}

export interface AddEnviromentArgs {
  name: string;
  value: string;
  stage: string;
  project: string;
}

export interface RemoveEnviromentArgs {
  name: string;
  stage: string;
  project: string;
}
