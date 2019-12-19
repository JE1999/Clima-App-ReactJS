import React from 'react'

function Clima({resultado}){

    const { name, weather, main } = resultado
    if(!name) return null

    //restar grados kelvin
    const kelvin = 273.15

    console.log(resultado)

    return(
        <div className="uk-child-width-1-1@m">
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-body">
                        <span className="uk-label uk-label-success">{weather[0].description}</span>
                        <h3 className="m-2">{resultado.name}</h3>
                        <h1>{parseInt(main.temp - kelvin, 10)} &#x2103;</h1>
                        <p>Temperatura Maxima: <span className="text-success">{parseInt(main.temp_max - kelvin, 10)} &#x2103;</span></p>
                        <p>Temperatura Minima: <span className="text-success">{parseInt(main.temp_min - kelvin, 10)} &#x2103;</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clima