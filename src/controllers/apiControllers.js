import axios from "axios";

const HEADERS = {
    'Content-type': 'application-json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
}


export const getRotationStart = async (baseUrl, direction) => {
    const http = axios.create({
        baseURL: baseUrl,
        headers: HEADERS,
    });
    console.log(`${baseUrl}/command?action=${direction}`)
    const rawResponse = await http.get(`${baseUrl}/command?action=${direction}`);
    return rawResponse.data;
}

export const getRotationStop = async (baseUrl) => {
    const http = axios.create({
        baseURL: baseUrl,
        headers: HEADERS,
    });
    console.log(`${baseUrl}/command?action=stop`)
    const rawResponse = await http.get(`${baseUrl}/command?action=stop`);
    return rawResponse.data;
}
