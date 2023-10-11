import React from "react";
import "../src/index.css";
import logo from "../assets/img/logo2.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-location">
                        <h3>Ubicación</h3>
                        <p>Santiago, Chile</p>
                    </div>
                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <ul>
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-reseña">
                        <h3>Sobre Nosotros</h3>
                        <p>
                            La Trattoria del Chef es mucho más que un restaurante;
                            es una experiencia culinaria que te transportará a las auténticas tradiciones italianas.
                            Nuestro apasionado equipo de chefs combina los sabores más exquisitos
                            con ingredientes frescos y de alta calidad para ofrecerte pizzas que deleitarán
                            tu paladar.
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <img
                        src={logo}
                        alt="Logo"
                        width="85"
                        height="75"
                    />
                    <p>&copy; {new Date().getFullYear()} La Trattoria del Chef.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;