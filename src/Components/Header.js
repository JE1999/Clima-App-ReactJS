import React from 'react'

function Header({titulo}){
    return(
        <nav className="uk-navbar-container uk-margin" uk-navbar="true">
            <div className="uk-navbar-center uk-flex uk-flex-center">
                <h3 className="uk-navbar-item uk-logo uk-margin-top">{titulo} <span className="uk-label uk-label-success uk-margin-left">API</span></h3>
            </div>
        </nav>
    )
}

export default Header