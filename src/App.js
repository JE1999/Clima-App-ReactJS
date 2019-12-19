import React, {useState, useEffect} from 'react';

//COMPONENTS
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Error from './Components/Error'
import Clima from './Components/Clima'


function App() {

  //ciudad = state, guardarCiudad = this.setState()
  const [ciudad, guardarCiudad] = useState('')
  const [pais, guardarPais] = useState('')
  const [error, guardarError] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {

    const consultarAPI = async () => {
    
      const appId = 'fd53aa9ff50a619a17fda2f26283d6f0'
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  
      //consultar url
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
  
      guardarResultado(resultado)
    
    }
    
    //prevenir ejecucion ya que useeffect es igual a didmount y update
    if(ciudad === '') return

    consultarAPI()
  }, [ciudad, pais])
 
  const datosConsulta = datosBusqueda => {
    //validar campos
    if(datosBusqueda.ciudad === '' || datosBusqueda.pais === ''){

      guardarError(true)
      return
    }

    //ciudad y pais existen, agregarlos al state
    guardarCiudad(datosBusqueda.ciudad)
    guardarPais(datosBusqueda.pais)
    guardarError(false)

  }

  //Cargar un componente condicionalmente
  let componente

  if(error){
    //hay un error mostrarlo
    componente = <Error mensajeError='Ambos campos son requeridos '/>
  
  } else if(resultado.cod === "404"){

    componente = <Error mensajeError='Ciudad no encontrada'/>

  } else{
    //mostrar clima
    componente = <Clima 
                    resultado = {resultado}
                  />
  }

  return (
    <div>
      <Header
        titulo = 'Clima React '
      />
      <div className="uk-container">
        <div className="uk-column-1-2@m">
          <div>
            <Formulario
              datosConsulta ={datosConsulta}
            />
          </div>
          <div className="uk-column-1-1">
            {componente}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
