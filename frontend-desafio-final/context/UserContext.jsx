import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext()

export default function UserContextProvider({ children }) {

    const [pizzas, setPizzas] = useState([])
    const [error, setError] = useState()
    const getData = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/pizzas", {
                method: "GET",
            });

            let data = await response.json();
            
            setPizzas(data)
        } catch (error) {
            setError(error)
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <UserContext.Provider value={{ pizzas, setPizzas, error, setError }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);