import React from "react";
import { useNavigate } from "react-router-dom";
import { useOperationsContext } from "../context/OperationsContext.jsx";
import ButtonAdd from "./ButtonAdd.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function CardPizza({ pizza }) {
    const navigate = useNavigate();
    const { FormatCoin } = useOperationsContext();
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = favorites.some((favPizza) => favPizza.id === pizza.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(pizza.id);
        } else {
            addFavorite(pizza);
        }
    }

    const toggleButtonText = isFavorite ? "❤️ Favorito" : "🤍 Agregar a favoritos";

    return (
        <div className="col-12 col-md-6 col-xl-3">
            <div className="card">
                <img src={pizza.img} className="card-img-top" alt={pizza.titulo} />
                <div className="card-body fixed-height-card">
                    <h5 className="text-center"><b>{pizza.titulo.charAt(0).toUpperCase() + pizza.titulo.slice(1)}</b></h5>
                    <hr />
                    <p><b>Ingredientes:</b></p>
                    <ul className="list-unstyled">
                        {pizza.ingredients && pizza.ingredients.split(",").map((item, index) => (
                            <li key={index}>• {item.trim()}</li>
                        ))}
                    </ul>
                    <hr />
                </div>
                <div className="align-self-end">
                    <h4 className="text-center"><b>{FormatCoin(pizza.valor)}</b></h4>
                    <div className="d-flex gap-3 justify-content-center p-2">
                        <button className="btn btn-primary" onClick={() => navigate(`/pizzas/${pizza.id}`)}>Ver más 👀</button>
                        <ButtonAdd idPizza={pizza.id} />
                    </div>
                    <div className="d-flex justify-content-center p-2">
                        <button className="btn btn-favorite" onClick={handleToggleFavorite}>
                            {toggleButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
