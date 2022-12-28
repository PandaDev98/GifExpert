export const httpRequest = async (category) => {
    const urlRequest = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=4KiyxEH3HOJb0gAGRY2GRlKSiXdrFe5a&limit=10`
    const Response = await fetch(urlRequest, [
        ['method', 'GET'],
        ['mode', 'no-cors'],
        ['headers', [
            ['Access-Control-Allow-Origin', '*'],
            ['Content-Type', 'application/json']
        ]]
    ])
    const { data } = await Response.json();
    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url
        }));
    return gifs;
}