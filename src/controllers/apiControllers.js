export const getRotationStart = async (baseUrl, direction) => {

    console.log(`${baseUrl}:8081/command?action=${direction}`)
    const rawResponse = await fetch(`${baseUrl}:8081/command?action=${direction}`);
    return rawResponse.data;
}

export const getRotationStop = async (baseUrl) => {
    console.log(`${baseUrl}:8081/command?action=stop`)
    const rawResponse = await fetch(`${baseUrl}:8081/command?action=stop`);
    return rawResponse.data;
}
