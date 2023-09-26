import React from 'react';

const Header = () => {
    return (
        <header className="nuevo-header">
            <div className="nuevo-header-content nuevo-container">
                <div className="nuevo-header-txt">
                    <span>Bienvenido a nuestra tienda</span>
                    <h1>Ofertas especiales</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sint
                        vitae aperiam ratione voluptas itaque quidem culpa voluptatibus.
                        Excepturi sit repellat id accusantium doloribus quibusdam quo nam
                        unde vel?
                    </p>
                    <div className="nuevo-butons">
                        <a href="#" className="nuevo-btn-1">
                            Informacion
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