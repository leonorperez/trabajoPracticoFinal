import { useGetPokemon } from '../services/services';
export const Home = () => {
  const { data } = useGetPokemon();

  console.log(data);

  return (
    <div>
      <h2 className="text-blue-700">Home</h2>
    </div>
  );
};
