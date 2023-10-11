import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (pizza) => {
        setFavorites((prevFavorites) => [...prevFavorites, pizza]);
    };

    const removeFavorite = (pizzaId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((pizza) => pizza.id !== pizzaId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
