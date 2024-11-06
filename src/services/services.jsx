import { useQuery } from '@tanstack/react-query';

const useGetPokemon = () => {
  return useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      return await response.json();
    },
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

export { useGetPokemon };
