import logo from './logo.svg';
import './App.css';
import { MiprierEstado } from "./components/MiprierEstado";
import { Ejercicio } from './components/Ejercicio';
import { PruebaComponets } from './components/PruebaComponets';
import { AjaxComponen } from './components/AjaxComponen';
import { FormularioComponen } from './components/FormularioComponen';

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>Estado de react</h1> */}
        {/* <FormularioComponen /> */}
        <AjaxComponen />
        {/* <PruebaComponets /> */}
        {/* <Ejercicio  year={year}/> */}
        {/* <MiprierEstado /> */}
      </header>
    </div>
  );
}

export default App;
