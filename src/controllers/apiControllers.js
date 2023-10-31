import axios from "axios";

const BASE_URL = "http://192.168.203.234"

const http = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-type': 'application-json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        },
    });

export const getRotationStart = async (baseUrl, direction) => {
    
    console.log(`${baseUrl}/command?action=${direction}`)
    const rawResponse = await http.get(`${baseUrl}/command?action=${direction}`);
    return rawResponse.data;
}

export const getRotationStop = async (baseUrl) => {
    console.log(`${baseUrl}/command?action=stop`)
    const rawResponse = await http.get(`${baseUrl}/command?action=stop`);
    return rawResponse.data;
}
