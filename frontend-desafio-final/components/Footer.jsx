import React from "react";
import "../src/index.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-location">
                        <h3>Ubicación</h3>
                        <p>Dirección de la tienda</p>
                        <p>Ciudad, País</p>
                    </div>
                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <ul>
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Menú</a>
                            </li>
                            <li>
                                <a href="#">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tu Nombre</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;