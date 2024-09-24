const BASE_URL = 'https://pokeapi.co/api/v2/';

interface ApiResponse<T> {
  data: T;
}

class PokeApiService {
  async fetchResource<T>(resource: string, identifier: string | number): Promise<ApiResponse<T>> {
    const url = `${BASE_URL}${resource}/${identifier}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error fetching ${resource} with ID/Name: ${identifier}`);
      }

      const data: T = await response.json();

      return { data };
    } catch (error) {
      console.error(`Error in fetchResource: ${error}`);
      throw error;
    }
  }
}

// Usage example

// Define the structure of the Pokémon data you're expecting
interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}
