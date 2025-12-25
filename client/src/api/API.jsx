

export const getLists = async (query, location) => {
    const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query + " in " + location)}&num_pages=1`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1cfb32f1c7msh6d999bf1a8ec750p19c087jsn87f6d37288ca', 
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("API call fail ho gayi!");
    
    const result = await response.json();
    console.log(result);
    return result.data; 
};