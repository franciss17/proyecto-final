import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useOperationsContext } from "../context/OperationsContext";
import ButtonAdd from "../components/ButtonAdd";

export default function PizzaDetail() {
    const { id } = useParams();
    const { pizzas } = useUserContext();
    const { FormatCoin } = useOperationsContext();
    const navigate = useNavigate();

    const pizza = pizzas.find((item) => item.id === id);

    if (!pizza) {
        return null;
    }

    const handleGoBack = () => {
        navigate("/");
    };

    const imgStyle = {
        width: "100%",
        height: "auto",
    };

    return (
        <main className="container mt-5 p-5">
            <div className="card-detail mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pizza.img} style={imgStyle} className="rounded-start h-100" alt="Pizza" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body-info">
                            <h5 className="fs-1">• {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1).toLowerCase()}</h5>
                            <p className="card-text">{pizza.desc}</p>
                            <p className="card-text">
                                <b>Ingredientes:</b>
                            </p>
                            <ul className="list-unstyled ps-4">
                                {pizza.ingredients.map((ingredient) => (
                                    <li key={Math.random()}>• {ingredient}</li>
                                ))}
                            </ul>
                            <h3>Precio: {FormatCoin(pizza.price)}</h3>
                            <div className="d-flex justify-content-end gap-3">
                                <button className="btn btn-primary" onClick={handleGoBack}>
                                    Volver <i className="fa-solid fa-house"></i>
                                </button>
                                <ButtonAdd idPizza={pizza.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
