import { useState } from 'react';
import { PokemonByName } from '../components/PokemonByName';

export const Searcher = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchTerm(formData.get('search').toLowerCase());
  };

  return (
    <div className="min-h-[calc(100vh-20vh)] bg-gradient-to-b from-gray-100 to-gray-200 py-2 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Buscador */}
        <form onSubmit={handleSubmit} className="mb-8 mt-8">
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Buscar Pokémon por nombre..."
              className="w-full p-4 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Resultados */}
        {searchTerm && <PokemonByName pokemonName={searchTerm} />}
      </div>
    </div>
  );
};
