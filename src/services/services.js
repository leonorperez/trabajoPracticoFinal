import { useQuery } from '@tanstack/react-query';

const useGetAllPokemones = () => {
  return useQuery({
    queryKey: ['getAllPokemones'],
    queryFn: async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=40');
      return await response.json();
    },
  });
};

const useGetPokemon = url => {
  return useQuery({
    queryKey: ['pokemon', url],
    queryFn: async () => {
      const response = await fetch(url);
      const data = await response.json();
      const formatedResponse = {
        name: data.name,
        order: data.order,
        image: data.sprites.front_default,
        weight: data.weight,
        types: data.types.map(type => type?.type.name),
      };
      return formatedResponse;
    },
    enabled: !!url,
  });
};

// const useCreatePokemon = () => {
//   return useMutation({
//     mutationKey: ["nuevoPokemon"],
//     mutationFn: async (body) => {
//       const options = {
//         url: "http://190.185.128.70:3003/pokemon",
//         method: "post",
//         data: body,
//         headers: {
//           "x-api-key": "HzUES4ruMsTus9BLhBsFu85f0gEAzvdy",
//         },
//       };
//       const response = await axios.request(options);
//       return response;
//     },
//   });
// };
export { useGetAllPokemones, useGetPokemon };
