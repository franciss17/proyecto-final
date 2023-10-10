import { useUserContext } from "../context/UserContext";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import Carousel from 'react-bootstrap/Carousel';

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
        <div className="products-container ">
            <Header />
            <div className="carousel">
                <Carousel>
                    {pizzas.map((item) => (
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100 pizza-image"
                                src={item.img}
                                alt={item.name}
                            />
                            <Carousel.Caption>
                                <h3 className="pizza-name">{item.name}</h3>
                                <p className="pizza-description">{item.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
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