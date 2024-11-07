import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Default } from './Pages/Default';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
}
