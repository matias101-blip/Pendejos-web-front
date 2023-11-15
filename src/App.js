import './App.css';
import './styles/normalize.css';
import Carteles from './componentes/carteles';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar" >
        <img className='logo' src={require("./img/logo.png")} alt="" />
      </nav>
      <h1>Hellow world</h1>
      <Carteles/>
    </div>
  );
}

export default App;
