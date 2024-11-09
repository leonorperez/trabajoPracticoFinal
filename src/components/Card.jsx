import { useGetPokemonPokeApi } from '../services/services';
import { Link } from 'react-router-dom';

export const Card = ({ link, pokeFacu }) => {
  const { data: pokemon, isLoading } = useGetPokemonPokeApi(link);

  if (isLoading) {
    return '...loading';
  }
  const finalPokemon = pokemon ? pokemon : pokeFacu;

  return (
    <Link to={`/pokemon/${finalPokemon.id}`} state={{ pokemon }}>
      <div className="border rounded-lg p-4 shadow-md  min-w-60 min-h-60 m-2 flex flex-col justify-center">
        <div className="text-center text-lg">{finalPokemon?.name}</div>
        <img src={finalPokemon.image} width="200px" />
        <div className="text-center">Peso: {finalPokemon?.weight}</div>
        <div className="text-center">
          {`${finalPokemon.types.length > 1 ? 'Tipos' : 'Tipo'}:`} {finalPokemon?.types.join(', ')}
        </div>
      </div>
    </Link>
  );
};
