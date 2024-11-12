import { useLocation, useNavigate } from 'react-router-dom';

export const Pokemon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemon = location.state?.finalPokemon;

  if (!pokemon) {
    return <div>No se encontró información del Pokémon</div>;
  }

  const handleBack = () => {
    navigate('/');
  };
  //i.imgur.com/oTTN3C2.png
  https: return (
    <div className="min-h-[calc(100vh-20vh)] bg-gradient-to-b from-gray-100 to-gray-200 py-2 px-4 sm:px-6 lg:px-8">
      <button
        onClick={handleBack}
        className="hover:scale-110 transition-transform duration-300 flex items-center"
      >
        <img
          src="https://i.imgur.com/oTTN3C2.png"
          alt="Volver"
          className="w-10 h-10 object-contain mr-2"
        />
        VOLVER
      </button>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl mt-8 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">{pokemon.name}</h1>
            <span className="text-xl text-white opacity-75">#{pokemon.id}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-4">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-64 h-64 object-contain hover:scale-110 transition-transform duration-300"
              onError={e => (e.target.src = 'https://i.imgur.com/ygIMkZv.png')}
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Types</h2>
              <div className="flex gap-2">
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

            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Order</p>
                    <p className="text-lg font-medium">{pokemon.order}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Weight</p>
                    <p className="text-lg font-medium">{pokemon.weight} kg</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Team</p>
                    <p className="text-lg font-medium">{pokemon.team}</p>
                  </div>
                  {pokemon.createdAt && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Created</p>
                      <p className="text-lg font-medium">
                        {new Date(pokemon.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
