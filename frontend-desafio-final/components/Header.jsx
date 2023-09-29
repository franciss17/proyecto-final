import React from 'react';

const Header = () => {
    return (
        <header className="nuevo-header">
            <div className="nuevo-header-content nuevo-container">
                <div className="nuevo-header-txt">
                    <h1>¡ Bienvenidos a La Trattoria del Chef !</h1>
                    <p>
                        • La Trattoria del Chef es un restaurante especializado en la venta de pizzas excepcionales.
                    </p>
                    <p>
                        • Situado en un encantador rincón de la ciudad, este establecimiento se ha ganado una excelente
                        reputación por ofrecer algunas de las pizzas más deliciosas y auténticas que se pueden encontrar.
                    </p>
                    <div className="nuevo-butons">
                        <a href="#" className="nuevo-btn-1">
                            Información
                        </a>
                        <a href="#" className="nuevo-btn-1">
                            Leer más
                        </a>
                    </div>
                </div>
                <div className="nuevo-header-img">
                    <img src="../assets/img/imagen-logo.jpg" alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;