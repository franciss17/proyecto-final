import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useOperationsContext } from "../context/OperationsContext";
import ButtonAdd from "../components/ButtonAdd";

export default function PizzaDetail() {
    const { id } = useParams();
    const { pizzas } = useUserContext();
    const { FormatCoin } = useOperationsContext();
    const navigate = useNavigate();
    console.log(pizzas)
    const pizza = pizzas.find((item) => item.id == id);
    console.log(pizza)

    if (!pizza) {
        return null;
    }

    const handleGoBack = () => {
        navigate("/");
    };

    const imgStyle = {
        width: "100%",
        height: "100vh",
    };

    return (
        <main className="container mt-5 p-5">
            <div className="card mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={pizza.img} style={imgStyle} className="rounded-start h-100" alt="Pizza" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="fs-1">
                                •
                                {pizza.titulo.charAt(0).toUpperCase() + pizza.titulo.slice(1).toLowerCase()}
                            </h5>
                            <p className="card-text">
                                {pizza.descripcion}
                            </p>
                            <p className="card-text">
                                <b>Ingredientes:</b>
                            </p>
                            <ul className="list-unstyled ps-4">
                                {pizza.ingredients && pizza.ingredients.split(",").map((ingredient) => (
                                    <li key={Math.random()}>
                                        •
                                        {ingredient.trim()}
                                    </li>
                                ))}
                            </ul>
                            <h3>Precio: {FormatCoin(pizza.valor)}</h3>
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
