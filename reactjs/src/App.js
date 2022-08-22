import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/body/Home';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Contact from './pages/body/Contact';
import About from './pages/body/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
