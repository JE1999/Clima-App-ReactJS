import React from 'react'

function Error({mensajeError}){
    return(
        <div className="uk-alert-danger">
            <span className="uk-alert-close"></span>
            <p>{mensajeError}</p>
        </div>
    )
}

export default Error