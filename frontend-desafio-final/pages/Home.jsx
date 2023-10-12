import React from 'react';
import { useUserContext } from "../context/UserContext.jsx";
import CardPizza from "../components/CardPizza.jsx";
import Header from "../components/Header.jsx";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Products() {
    const { pizzas, error } = useUserContext();
    if (error) {
        return (
            <div className="container p-5 mt-5">
                <div>
                    <h3 className="text-center error-message">{error}</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="products-container">
            <Header />
            <div className="carousel-section">
                <Carousel showArrows={true}>
                    <div>
                        <img
                            className="carousel-image"
                            src="../assets/img/oferta-2.jpg"
                            alt="Imagen 1"
                        />
                        <p className="legend">
                            PROMO
                            ARMA TU PIZZA
                            2X1
                        </p>
                    </div>
                    <div>
                        <img
                            className="carousel-image"
                            src="../assets/img/oferta-1.jpg"
                            alt="Imagen 2"
                        />
                    </div>
                    <div>
                        <img
                            className="carousel-image"
                            src="../assets/img/oferta-3.jpg"
                            alt="Imagen 3"
                        />
                        <p className="legend">
                            PROMO 
                            ESPECIALIDADES
                            2X1
                        </p>
                    </div>
                </Carousel>
            </div>
            <div className="container p-5 mt-5">
                <div className="row">
                    {pizzas.map((item) => (
                        <CardPizza pizza={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}