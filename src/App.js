import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
