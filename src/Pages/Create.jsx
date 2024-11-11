import React, { useState } from 'react';
import { useCreatePokemon } from '../services/services';

export const Create = () => {
  const { mutate: createPokemon } = useCreatePokemon();
  const [data, setData] = useState({
    name: null,
    order: null,
    weight: 0,
    image: null,
    types: [],
    team: 1,
  });
  const [nuevoPokemon, setNuevoPokemon] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();

    console.log(data);
    createPokemon(data, {
      onSuccess: res => {
        setNuevoPokemon(res);
      },
      onError: err => console.log(err?.response?.data?.message),
    });
  };

  function handleInput(event) {
    const field = {
      name: event.target.name,
      value: event.target.value,
    };
    setData({
      ...data,
      [field.name]: field.value,
    });
  }

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

  console.log(nuevoPokemon && nuevoPokemon);
  // console.log('data ' && data);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/3 mx-auto gap-5 p-6 border-2 border-black bg-slate-200"
    >
      <label htmlFor="">
        Nombre
        <input name="name" type="text" onChange={event => handleInput(event)} />
      </label>
      <label htmlFor="">
        Orden
        <input name="order" type="number" onChange={event => handleInput(event)} />
      </label>
      <label htmlFor="">
        weight
        <input name="weight" type="number" onChange={event => handleInput(event)} />
      </label>
      <label htmlFor="">
        image
        <input name="image" type="text" onChange={event => handleInput(event)} />
      </label>
      <label htmlFor="">
        types
        <select name="types">
          {Object.values(PokemonTypesEnum).map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
