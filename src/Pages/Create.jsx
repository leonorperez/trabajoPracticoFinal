import { useCreatePokemon } from '../services/services';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Create = () => {
  const { mutate } = useCreatePokemon();
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState([]);

  const pokemonTypes = [
    'Normal',
    'Fire',
    'Water',
    'Electric',
    'Grass',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dragon',
    'Dark',
    'Steel',
    'Fairy',
  ];

  const handleTypeClick = type => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else if (selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pokemon = {
      name: formData.get('name'),
      image: formData.get('image'),
      types: selectedTypes,
      weight: Number(formData.get('weight')),
      order: Number(formData.get('order')),
      team: 1,
    };
    mutate(pokemon, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-20vh)] bg-gradient-to-b from-gray-100 to-gray-200 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl mt-8 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Crear Nuevo Pokémon</h1>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full bg-gray-50 rounded-xl p-4 aspect-square flex items-center justify-center">
                <img
                  id="preview"
                  src="https://i.imgur.com/ygIMkZv.png"
                  alt="Preview"
                  className="max-w-[200px] max-h-[200px] object-contain"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL de Imagen
                </label>
                <input
                  type="text"
                  name="image"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  onChange={e => {
                    const preview = document.getElementById('preview');
                    preview.src = e.target.value || 'https://i.imgur.com/ygIMkZv.png';
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipos (selecciona hasta 2)
                </label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {pokemonTypes.map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleTypeClick(type)}
                      className={`p-2 rounded-lg text-sm font-medium transition-colors
                        ${
                          selectedTypes.includes(type)
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                        ${
                          selectedTypes.length >= 2 && !selectedTypes.includes(type)
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {selectedTypes.length === 0 && (
                  <p className="text-red-500 text-sm mt-1">Selecciona al menos un tipo</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Peso</label>
                <input
                  type="number"
                  name="weight"
                  required
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Orden</label>
                <input
                  type="number"
                  name="order"
                  required
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={selectedTypes.length === 0}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Crear Pokémon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
