import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Default } from './Pages/Default';
import { Create } from './Pages/Create';
import { Pokemon } from './Pages/Pokemon';
import { Searcher } from './Pages/Searcher';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="searcher" element={<Searcher />} />
        <Route path="create" element={<Create />} />
        <Route path="about" element={<About />} />
        <Route path="pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
}
