import { useGetPokemonByNamePokeApi } from '../services/services';
import { Loading } from './Loading';
import { Link } from 'react-router-dom';

export const PokemonByName = ({ pokemonName }) => {
  const { data: pokemon, isLoading, isError } = useGetPokemonByNamePokeApi(pokemonName);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow-lg">
        <p className="text-xl text-gray-600">No se encontró ningún Pokémon con ese nombre</p>
      </div>
    );
  }

  return (
    <Link to={`/pokemon/${pokemon.name}`} state={{ finalPokemon: pokemon }}>
      <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{pokemon.name}</h2>
          <span className="text-lg text-gray-600">#{pokemon.id}</span>
        </div>

        <div className="flex justify-center mb-4">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-48 h-48 object-contain hover:scale-110 transition-transform duration-300"
            onError={e => (e.target.src = 'https://i.imgur.com/ygIMkZv.png')}
          />
        </div>

        <div className="flex gap-2 justify-center">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="px-4 py-1 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
