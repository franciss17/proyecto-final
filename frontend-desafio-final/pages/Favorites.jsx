import React from "react";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>Tus Favoritos</h1>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((favorite) => (
                        <FavoriteItem key={favorite.id} name={favorite.name} />
                    ))}
                </ul>
            ) : (
                <p>No tienes pizzas favoritas aún.</p>
            )}
        </div>
    );
}

function FavoriteItem({ name }) {
    return <li>{name}</li>;
}

export default Favorites;
