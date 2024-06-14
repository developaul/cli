export interface ImportEnviromentsAnswers {
  filePath: string;
  stage: string;
  project: string;
}

export interface AddEnviromentAnswers {
  name: string;
  value: string;
  stage: string;
  project: string;
}

export interface RemoveEnviromentAnswers {
  name: string;
  stage: string;
  project: string;
}
