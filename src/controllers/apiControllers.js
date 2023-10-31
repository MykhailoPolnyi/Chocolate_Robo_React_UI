export const getRotationStart = async (baseUrl, direction) => {
    
    console.log(`${baseUrl}/command?action=${direction}`)
    const rawResponse = await fetch(`${baseUrl}/command?action=${direction}`);
    return rawResponse.data;
}

export const getRotationStop = async (baseUrl) => {
    console.log(`${baseUrl}/command?action=stop`)
    const rawResponse = await fetch(`${baseUrl}/command?action=stop`);
    return rawResponse.data;
}
