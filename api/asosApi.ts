import axios from "axios";

export const asosApi = axios.create({
    baseURL: 'https://asos2.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '90cfba68d3mshc2390ae1766da0bp1f4fb4jsn545ef070cd9b',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
    },
});
