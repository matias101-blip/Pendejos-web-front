import '../styles/container-slide.css'

function ContainerSlide(props){
  const fondo_img = {
    backgroundImage: `url(${require(`../img/${props.fondo}`)})`,
    backgroundSize: 'cover',
    color: '#363435'
  };
  return(
    <div className='Slider'>
      <div className='container-slide' style={fondo_img}>
        <div className='container-opacity'>
          <div className='portada-slide'>
            <img src={require(`../img/${props.img}`)} alt="" />
          </div>
          <div className='info-slide'>
            <div className='Titulo-slide'>
            <h2>{props.titulo}</h2>
            </div>
            <div className='Resumen-slide'>
              <p>{props.resumen}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerSlide;
