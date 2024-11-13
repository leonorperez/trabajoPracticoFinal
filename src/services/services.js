import { useQuery, useMutation } from '@tanstack/react-query';

const apiKey = 'HzUES4ruMsTus9BLhBsFu85f0gEAzvdy';

const useGetAllPokemones = limit => {
  return useQuery({
    queryKey: ['getAllPokeApi'],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
      return await response.json();
    },
  });
};

const useGetPokemonByNamePokeApi = name => {
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        const data = await response.json();
        const formatedResponse = {
          id: data.id,
          name: data.name,
          order: data.order,
          image: data.sprites.front_default,
          weight: data.weight,
          types: data.types.map(type => type?.type.name),
          team: 1,
        };
        return formatedResponse;
      } catch (error) {
        throw new Error('Pokemon not found');
      }
    },
    enabled: !!name,
    retry: false,
  });
};

const useGetAll = () => {
  return useQuery({
    queryKey: ['getAllPokeFacu'],
    queryFn: async () => {
      const response = await fetch('http://190.185.128.70:3003/pokemon?equipo=1', {
        headers: {
          'x-api-key': apiKey,
        },
      });
      const data = await response.json();
      return data.reverse();
    },
  });
};

const useCreatePokemon = () => {
  return useMutation({
    mutationKey: ['createPokemon'],
    mutationFn: async body => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(body),
      };
      const response = await fetch('http://190.185.128.70:3003/pokemon', options);
      if (!response.ok) {
        throw new Error('Failed to create pokemon');
      }
      return response.json();
    },
  });
};

const useGetPokemonPokeApi = url => {
  return useQuery({
    queryKey: ['pokemon', url],
    queryFn: async () => {
      const response = await fetch(url);
      const data = await response.json();
      const formatedResponse = {
        id: data.id,
        name: data.name,
        order: data.order,
        image: data.sprites.front_default,
        weight: data.weight,
        types: data.types.map(type => type?.type.name),
        team: 1,
      };
      return formatedResponse;
    },
    enabled: !!url,
  });
};

export {
  useGetAll,
  useGetAllPokemones,
  useGetPokemonPokeApi,
  useCreatePokemon,
  useGetPokemonByNamePokeApi,
};
