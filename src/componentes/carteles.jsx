import '../styles/Carteles.css'

function Carteles(props) {
  return(
    <div className='Cartelera'>
      <img className='portada' src={require(`../img/${props.img}`)} alt="portada" />
      <div className='Info' >
        <h2 className='titulo' >{props.title}</h2>
      </div>
    </div>
  );
}

export default Carteles;
