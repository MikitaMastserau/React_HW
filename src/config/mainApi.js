import axios from "axios";

const BASE_URL = "http://localhost:3001";

const config = {
   baseURL: BASE_URL,
};

export const mainApiConfig = axios.create(config);