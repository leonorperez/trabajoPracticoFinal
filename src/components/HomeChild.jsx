import { Card } from './Card';
import { Loading } from '../components/Loading';
import { useGetAllPokemones } from '../services/services';

export const HomeChild = ({ pokeFacus }) => {
  const { data: allPokemones, isLoading } = useGetAllPokemones(40 - pokeFacus?.length);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-[100%] py-2 px-10 flex items-center flex-col">
      <div className="flex flex-wrap mt-10 justify-center">
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
