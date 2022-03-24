import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu/Menu';
import Qualificacoes from './pages/Qualificações/Qualificacoes';
import SobreMim from './pages/SobreMim/SobreMim';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Menu />} exact />
        <Route path='/sobremim' element={ <SobreMim /> } />  
        <Route path='/qualificacoes' element={ <Qualificacoes />} />
      </Routes>
    </div>
  );
}

export default App;
