import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. IMPORT COMPONENTS
import Layout from './components/Layout';

// 2. IMPORT PAGES
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import Experience from './pages/Experience';
import Contributions from './pages/Contributions';
// 3. GLOBAL STYLES
import './styles/Global.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
            <Route path="about" element={<Experience />} />
             <Route path="about" element={<Contributions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contributions" element={<Contributions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;