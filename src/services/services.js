import { useQuery } from '@tanstack/react-query';

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

const useGetAll = () => {
  return useQuery({
    queryKey: ['getAllPokeFacu'],
    queryFn: async () => {
      const response = await fetch('http://190.185.128.70:3003/pokemon?equipo=1', {
        headers: {
          'x-api-key': apiKey,
        },
      });
      return await response.json();
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

export { useGetAll, useGetAllPokemones, useGetPokemonPokeApi };
