import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex bg-[#756eb4] w-[100%]">
          <img src="https://i.imgur.com/8eRJVyP.png" alt="pokemon" width="20%" />
          <img src="https://i.imgur.com/5l82UJl.jpeg" alt="unicaba" width="10%" />
        </div>
        <hr />
        <nav className="h-14">
          <ul className="flex justify-evenly text-xl font-bold">
            <li>
              <Link to="/">Listado de Pokemones</Link>
            </li>
            <li>
              <Link to="/create">Crear Pokemon</Link>
            </li>
            <li>
              <Link to="/about">Acerca de....</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
};
