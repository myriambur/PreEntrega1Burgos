import "./navBar.css"
import CartWidget from '../CartWidget';
import React from "react";

const NavBar = () => {
    return (<nav className="navigation">
        <a href="/" className="brand-name">
            Calidad a tu Vida
        </a>

        <div
            className="navigation-menu">
            <ul>
                <li>
                    <a href="/home">Inicio</a>
                </li>
                <li>
                    <a href="/about">Productos</a>
                </li>
                <li>
                    <a href="/contact">Contacto</a>
                </li>
                <li>
                    <a href="/#"><CartWidget cantidad='5'/></a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;