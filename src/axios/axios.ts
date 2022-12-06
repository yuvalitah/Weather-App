import axios, { AxiosInstance } from "axios";
import { BASE_API } from "../constants";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_API,
});
