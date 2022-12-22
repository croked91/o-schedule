//Не актуально в этом кейсе. Использую прокси с fetch в самой модели из-за CORS политики, но на рабочем проекте делал бы примерно так.

import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import { ITVShow } from "./interface";

const BASE_URL = "/schedule.json";

export const getTVShowList = (): AxiosPromise<ITVShow[]> => {
  return apiInstance.get(BASE_URL);
};
