import './App.css';
import './styles/normalize.css';
import Carteles from './componentes/carteles';
import Noticias from './componentes/New';
import ContainerSlide from './componentes/container-slide'

function App() {
  return (<div className="App">
    <nav className="nav-bar">
      <img className='logo' src={require("./img/logo.png")} alt=""/>
    </nav>
    <div className='Seccion1'>
      <h2>Lo nuevo de la Semana:</h2>
      <div className='SlideSeccion1'>
        <ContainerSlide fondo='Tap-Water.png' titulo='Tap Water Pollution' resumen='El efecto de la contaminación del agua ha resultado en que los bebés recién nacidos tengan órganos sexuales tanto masculinos como femeninos, las Naciones Unidas concluyeron su decisión de que el niño tendrá derecho a elegir su sexo una vez que llegue a la edad adulta. Por humana que sea la regulación, siguió un gran desastre...' img="Tap-Water.png"/>
        <ContainerSlide fondo='Super-God-Card.png' titulo='Super God Card Maker' resumen='¿¡Qué mierda!? ¿¡Hice un programa en mi vida pasada y morí de repente!? La historia del Manhua sigue a Lu Ming, un programador que muere durante su trabajo y es transportado a un mundo diferente. Allí, descubre que además de que este nuevo mundo tiene mujeres hermosas, también existen habilidades que sobrepasan el entendimiento y… una deuda que tendrá que pagar' img="Super-God-Card.png"/>
        <ContainerSlide fondo='Unwanted.png' titulo='Unwanted Crush' resumen='Lin Ge, una chica aparentemente genial y serena (pero apasionada y salvaje por dentro) que casi no tiene experiencia amorosa, casualmente conoció a todos sus enamoramientos unilaterales anteriores mientras estudiaba en el extranjero, ¡cada uno más guapo y talentoso que el anterior! ¿E incluso le dijeron que en realidad también estaban enamorados de ella en ese entonces?' img="Unwanted.png"/>
      </div>
    </div>
    <div className='Seccion2' >
      <div className='sugerencias:'>
        <h1>Sugerencias:</h1>
      <div className='cartelera'>
        <Carteles title='Tap Water Pollution' img='Tap-Water.png' />
        <Carteles title='Super God Card Maker' img='Super-God-Card.png' />
        <Carteles title='Unwanted Crush' img='Unwanted.png' />
        <Carteles title='Infection Zone' img='Infection-Zone.png' />
        <Carteles title='Placer Predestinado' img='Placer.png' />
        <Carteles title='Survival Count down' img='Survival.png' />
        <Carteles title='Our ball Moon rise' img='Our-Ball.png' />
        <Carteles title='Mijeong Relations Ship' img='Mijeong.png' />
      </div>
      </div>
      <div className='Noticias'>
        <Noticias/>
        <Noticias/>
      </div>
    </div>
  </div>);
}

export default App;
