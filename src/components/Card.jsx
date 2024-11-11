import { useGetPokemonPokeApi } from '../services/services';
import { Link } from 'react-router-dom';

export const Card = ({ link, pokeFacu }) => {
  const { data: pokemon, isLoading } = useGetPokemonPokeApi(link);

  if (isLoading) {
    return '...loading';
  }
  const finalPokemon = pokemon ? pokemon : pokeFacu;

  return (
    <Link to={`/pokemon/${finalPokemon.name}`} state={{ finalPokemon }}>
      <div className="border rounded-lg p-4 shadow-md  min-w-60 min-h-80 max-h-80 m-2 flex flex-col justify-between">
        <p class="text-xl text-center font-semibold text-black dark:black">{finalPokemon?.name}</p>

        <img
          src={finalPokemon.image}
          width="200px"
          height="200px"
          style={{ maxHeight: '200px' }}
          onError={e => (e.target.src = 'https://i.imgur.com/ygIMkZv.png')}
          alt="Imagen no disponible"
        />
        <div className="min-h-5"></div>
      </div>
    </Link>
  );
};
