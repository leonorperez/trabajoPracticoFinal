import { Card } from './Card';
import { useGetAllPokemones } from '../services/services';
export const HomeChild = ({ pokeFacus }) => {
  const { data: allPokemones, isLoading } = useGetAllPokemones(40 - pokeFacus?.length);

  if (isLoading) {
    return '...loading';
  }

  return (
    <div className="w-[100%] py-2 px-10 flex items-center flex-col">
      <div className="w-[100%] text-start">
        <h2 className="text-blue-700">Pokemones: </h2>
      </div>
      <div className="flex flex-wrap  justify-center">
        {pokeFacus.map((poke, index) => (
          <Card key={index} pokeFacu={poke} />
        ))}
        {allPokemones.results.map((poke, index) => (
          <Card key={index} link={poke?.url} />
        ))}
      </div>
    </div>
  );
};
