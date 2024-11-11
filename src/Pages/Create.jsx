import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePokemon } from '../services/services';

export const Create = () => {
  const { mutate: createPokemon } = useCreatePokemon();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    order: '',
    weight: 0,
    image: '',
    types: [],
    team: 1,
  });
  const [nuevoPokemon, setNuevoPokemon] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    createPokemon(data, {
      onSuccess: res => {
        setNuevoPokemon(res);
        navigate('/');
      },
      onError: err => console.log(err?.response?.data?.message),
    });
  };

  const handleInput = event => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      setData(prevData => ({
        ...prevData,
        types: event.target.checked
          ? [...prevData.types, value]
          : prevData.types.filter(type => type !== value),
      }));
    } else {
      setData({
        ...data,
        [name]: type === 'number' ? parseFloat(value) : value,
      });
    }
  };

  const PokemonTypesEnum = {
    BUG: 'Bug',
    DARK: 'Dark',
    DRAGON: 'Dragon',
    ELECTRIC: 'Electric',
    FAIRY: 'Fairy',
    FIGHTING: 'Fighting',
    FIRE: 'Fire',
    FLYING: 'Flying',
    GHOST: 'Ghost',
    GRASS: 'Grass',
    GROUND: 'Ground',
    ICE: 'Ice',
    NORMAL: 'Normal',
    POISON: 'Poison',
    PSYCHIC: 'Psychic',
    ROCK: 'Rock',
    STEEL: 'Steel',
    WATER: 'Water',
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-lg mx-auto gap-6 p-8 border-2 border-gray-300 rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">Crear Pokémon</h2>

      <label htmlFor="name" className="text-lg font-medium text-gray-700">
        Nombre
        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handleInput}
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </label>

      <label htmlFor="order" className="text-lg font-medium text-gray-700">
        Orden
        <input
          name="order"
          type="number"
          value={data.order}
          onChange={handleInput}
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </label>

      <label htmlFor="weight" className="text-lg font-medium text-gray-700">
        Peso
        <input
          name="weight"
          type="number"
          value={data.weight}
          onChange={handleInput}
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </label>

      <label htmlFor="image" className="text-lg font-medium text-gray-700">
        Imagen
        <input
          name="image"
          type="text"
          value={data.image}
          onChange={handleInput}
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>

      <fieldset className="text-lg font-medium text-gray-700">
        <legend>Tipos</legend>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.values(PokemonTypesEnum).map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="types"
                value={type}
                checked={data.types.includes(type)}
                onChange={handleInput}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Crear Pokémon
      </button>

      {nuevoPokemon && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          Pokémon creado con éxito: {nuevoPokemon.name}
        </div>
      )}
    </form>
  );
};
