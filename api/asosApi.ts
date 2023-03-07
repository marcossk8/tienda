import axios from "axios";
import { ASOS_API, X_RAPIDAPI_HOST, X_RAPIDAPI_KEY } from "./configEnv";

export const asosApi = axios.create({
    baseURL: ASOS_API,
    headers: {
        'X-RapidAPI-Key': X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': X_RAPIDAPI_HOST,
    },
});
