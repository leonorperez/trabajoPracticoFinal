import { HomeChild } from '../components/HomeChild';
import { useGetAll } from '../services/services';

export const Home = () => {
  const { data: allPokeFacus, isLoading } = useGetAll();

  if (isLoading) {
    return '...loading';
  }

  return <>{<HomeChild pokeFacus={allPokeFacus} />}</>;
};
