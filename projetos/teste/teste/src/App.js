import './App.css';
import {Route, Routes} from "react-router-dom";
import Filmes from './components/Filmes/Filmes';
import Login from './components/Login/login';
import Hqs from './components/Hqs/Hqs';
import Personagens from './components/Personagens/Personagens';

function App() {
  return (
    <Routes>
      <Route path='/filmes' element={<Filmes/>}/>
      <Route path='/hqs' element={<Hqs/>}/>
      <Route path='/personagens' element={<Personagens/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
  );
}

export default App;
