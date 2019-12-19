import React, {useState} from 'react'

function Formulario({datosConsulta}){

    //state del componente
    //busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e =>{
        //guardando en el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }

    const consultarClima = e =>{
        e.preventDefault()

        //Pasar hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda)
    }

    return(
        <form
            onSubmit={consultarClima}
            className="uk-form-stacked">

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-text">Text</label>
                <div className="uk-form-controls">
                    <input 
                        className="uk-input" 
                        id="form-stacked-text" 
                        type="text" 
                        placeholder="Ciudad..."
                        name="ciudad"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">Select</label>
                <div className="uk-form-controls">
                    <select 
                        className="uk-select" 
                        id="form-stacked-select"
                        name="pais"
                        onChange={handleChange}    
                    >
                        <option value="">Selecciona un pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="ES">España</option>
                    </select>
                </div>
            </div>

            <div className="uk-margin">
                <button type="submit" className="uk-button uk-label-success uk-width-1-1 uk-margin-small-bottom">Buscar clima</button>
            </div>

        </form>
    )
}

export default Formulario