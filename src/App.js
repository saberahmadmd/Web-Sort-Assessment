import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import AboutUs from './components/aboutus/Aboutus/Aboutus';
import Services from './components/sections/Services/Services';
import Project from './components/sections/Projects/Projects';
import Careers from './components/sections/Careers/Careers';
import Contact from './components/sections/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><AboutUs /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/projects" element={<Layout><Project /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;