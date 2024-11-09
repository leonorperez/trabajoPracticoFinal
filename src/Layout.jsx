import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex bg-[#756eb4] w-[100%] items-center justify-between">
          <img src="https://i.imgur.com/8eRJVyP.png" alt="pokemon" width="15%" />
          <img src="https://i.imgur.com/UOI7Xxl.png" alt="unicaba" width="15%" />
        </div>
        <hr />
        <nav className="h-14">
          <ul className="flex justify-evenly text-xl font-bold h-[100%] items-center">
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
