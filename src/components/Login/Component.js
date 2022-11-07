import React from 'react';
import './styles.css';


function HeaderComponent() {
    return (
        <header class="main-header">
            <figure className="logo-container">
                <img src="logo.png"></img>
            </figure>

            <nav >
                <ul class="main-navigation">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
