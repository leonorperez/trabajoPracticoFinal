import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-red-700 p-2">Poke poke</h1>
        <nav className="h-14">
          <ul className="flex justify-evenly text-xl font-bold">
            <li>
              <Link to="/">Listado de Pokemones</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
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
