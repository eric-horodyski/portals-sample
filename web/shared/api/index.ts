import axios from "axios";

type Session = {
  access_token: string;
  sub: string;
  name: string;
  refresh_token: string;
  exp: number;
};

const url = "https://88tkyz16e2.execute-api.us-east-2.amazonaws.com/v1";
const headers = { "x-api-key": "kRJoNgYv0z4jK8YyhhzJU94HEJCWPUeG1UzTRkAF" };

let session: Session | undefined = undefined;

const httpClient = axios.create({ baseURL: url, headers });

const refreshSession = async (accessToken: string, refreshToken: string) => {
  const endpoint = `${url}/auth/refresh`;
  const { data } = await httpClient.post(endpoint, {
    accessToken,
    refreshToken,
  });
  session = data;
};

export { httpClient, session, refreshSession };
