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
    console.log(`${baseUrl}?rotate_direction=${direction}`)
    const rawResponse = await http.get(`${baseUrl}?rotate_direction=${direction}`);
    return rawResponse.data;
}

export const getRotationEnd = async (baseUrl) => {
    console.log(`${baseUrl}?stop=true`)
    const rawResponse = await http.get(`${baseUrl}?stop=true`);
    return rawResponse.data;
}