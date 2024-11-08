import { useLocation } from 'react-router-dom';

export const Pokemon = () => {
  let location = useLocation();

  console.log(location);
  return (
    <div>
      <h2>SOY UN POKEMON</h2>
    </div>
  );
};
