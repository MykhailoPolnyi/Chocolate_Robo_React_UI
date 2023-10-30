import axios from "axios";


const http = axios.create({
    baseURL: ``,
    headers: {
        'Content-type': 'application-json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    }
});

export const getRotation = async (baseUrl, direction) => {
    console.log(`${baseUrl}/?action=${direction}`)
    const rawResponse = await http.get(`${baseUrl}/command?action=${direction}`);
    return rawResponse.data;
}

export const getRotationEnd = async (baseUrl) => {
    console.log(`${baseUrl}?action=stop`)
    const rawResponse = await http.get(`${baseUrl}/command?action=stop`);
    return rawResponse.data;
}