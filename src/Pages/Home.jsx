import { HomeChild } from '../components/HomeChild';
import { useGetAll } from '../services/services';
import { Loading } from '../components/Loading';

export const Home = () => {
  const { data: allPokeFacus, isLoading } = useGetAll();

  if (isLoading) {
    return <Loading />;
  }

  return <>{<HomeChild pokeFacus={allPokeFacus} />}</>;
};
