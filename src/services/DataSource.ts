import axios from "axios";
import type { AxiosInstance } from "axios";

import type { Credentials } from "@/interfaces";

class DataSource {
  instance: AxiosInstance;
  constructor(baseURL: string, credentials?: Credentials) {
    this.instance = axios.create({ baseURL });

    if (credentials) {
      const { username, password } = credentials;
      this.instance.defaults.headers.common["username"] = username;
      this.instance.defaults.headers.common["password"] = password;
    }
  }

  async post<T>(path: string, params?: any): Promise<T> {
    const { data } = await this.instance.post(path, params);

    return data;
  }

  async get<T>(path: string, params?: any): Promise<T> {
    const { data } = await this.instance.get(path, params);

    return data;
  }

  async put<T>(path: string, params?: any): Promise<T> {
    const { data } = await this.instance.put(path, params);

    return data;
  }

  async delete<T>(path: string, params?: any): Promise<T> {
    const { data } = await this.instance.delete(path, params);

    return data;
  }
}

export default DataSource;
