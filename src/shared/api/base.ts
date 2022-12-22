//Не актуально в этом кейсе. Использую прокси с fetch в самой модели из-за CORS политики, но на рабочем проекте делал бы примерно так.

import axios from "axios";
import { API_URL } from "shared/config";

export const apiInstance = axios.create({
  baseURL: API_URL,
});
