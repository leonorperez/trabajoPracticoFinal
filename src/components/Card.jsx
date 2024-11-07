import { useGetPokemon } from '../services/services';
export const Card = ({ link }) => {
  const { data: pokemon, isLoading } = useGetPokemon(link);

  if (isLoading) {
    return '...loading';
  }
  console.log(pokemon);
  return (
    <div className="border rounded-lg p-4 shadow-md  min-w-60 min-h-60 m-2 flex flex-col justify-center">
      <div className="text-center text-lg">{pokemon?.name}</div>
      <img src={pokemon.image} />
      <div className="text-center">Peso: {pokemon?.weight}</div>
      <div className="text-center">
        {`${pokemon.types.length > 1 ? 'Tipos' : 'Tipo'}:`} {pokemon?.types.join(', ')}
      </div>
    </div>
  );
};
