import { credentialsController } from "@/controllers";
import type { IContext } from "@/interfaces";
import { EnviromentsAPI } from "@/services";

export const getContext = (): IContext => {
  const credentials = credentialsController.getCredentials();

  if (!credentials) throw new Error("Credentials not found");

  return {
    dataSource: {
      enviromentsAPI: new EnviromentsAPI(credentials),
    },
  };
};
