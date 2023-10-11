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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65280125.95684839!2d-74.48435958635211!3d2.991130998912869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d591a6c44e88cd%3A0x32eca9b1d554fc03!2sTorre%20de%20Pisa!5e0!3m2!1ses-419!2scl!4v1697064381187!5m2!1ses-419!2scl"
                            width="200"
                            height="200"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <p>Santiago, Chile</p>
                    </div>
                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <ul>
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="mailto:contacto.chef@gmail.com">Contacto</a>
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
