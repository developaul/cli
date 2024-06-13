import { EnviromentsAPI } from "@/services";

export interface IContext {
  dataSource: DataSource;
}

export interface DataSource {
  enviromentsAPI: EnviromentsAPI;
}
