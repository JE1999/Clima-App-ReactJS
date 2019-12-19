import React from 'react'

function Clima({resultado}){

    const { name, weather, main } = resultado
    if(!name) return null

    //restar grados kelvin
    const kelvin = 273.15

    console.log(resultado)

    return(
        <div className="uk-child-width-1-2@m">
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-body">
                        <span className="uk-label uk-label-success uk-margin-top">{weather[0].description}</span>
                        <h3>{resultado.name} {parseInt(main.temp - kelvin, 10)} &#x2103;</h3>
                        <p>Temperatura Maxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                        <p>Temperatura Minima: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clima