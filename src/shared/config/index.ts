
//Не актуально в этом кейсе. Использую прокси с fetch в самой модели из-за CORS политики, но на рабочем проекте делал бы примерно так.

const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
      throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || "";
};


export const API_URL = getEnvVar("REACT_APP_API_URL");
export const NODE_ENV = getEnvVar("NODE_ENV");
export const isDevEnv = NODE_ENV === "development";
export const isProdEnv = NODE_ENV === "production";


export const TIME_FORMAT = "HH:mm";
export const DURATION_FORMAT = "H ч. mm м.";