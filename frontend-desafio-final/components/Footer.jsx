import React from "react";
import logo from "../assets/img/logo3.svg";
import "../src/index.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-location">
                        <h3>Ubicación</h3>
                        <p>Dirección de la tienda</p>
                        <p>Santiago, Chile</p>
                    </div>
                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <ul>
                            <li>
                                <a href="#">Inicio</a>
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
                    <img
                        src={logo}
                        alt="Logo"
                        width="85"
                        height="75"
                        style={{ backgroundColor: "#F0F0F0" }}
                    />
                    <p>&copy; {new Date().getFullYear()} La Trattoria del Chef</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;