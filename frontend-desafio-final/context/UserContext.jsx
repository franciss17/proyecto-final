import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext()

export default function UserContextProvider({ children }) {

    const [pizzas, setPizzas] = useState([])
    const [error, setError] = useState()

    const getData = async () => {
        try {
            const response = await fetch("/pizzas.json")
            if (!response.ok) throw "NO SE PUEDE DESPLEGAR LA INFORMACIÓN"
            const data = await response.json()
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