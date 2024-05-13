// searchapi.ts
export const searchSongs = async (query: string): Promise<any[]> => {
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${query}&per_page=10&page=1`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c3f372d655msh1ed851a83f5276cp1e199djsn22f95d9a500b',
        'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.hits.map((hit: any) => hit.result);
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  