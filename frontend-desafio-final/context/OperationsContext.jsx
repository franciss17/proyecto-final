import { createContext, useContext, useState } from "react"
import { useUserContext } from "./UserContext"

export const OperationsContext = createContext()

export default function OperationsContextProvider({ children }) {

    const { pizzas } = useUserContext()
    const [carro, setCarro] = useState([])
    const FormatCoin = (number) =>
        (new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number))
    let total = 0
    carro.map((i) => (
        total += Number(i.precio) * Number(i.cantidad)
    ))
    const AddPizza = (idPizza) => {
        const pizzaSeleccionada = pizzas.find(item => item.id === idPizza)
        if (carro.find(item => item.id === idPizza)) {
            setCarro(carro.
                map((i) => {
                    if (i.id === idPizza) {
                        return { ...i, cantidad: Number(i.cantidad) + 1 }
                    } else {
                        return i
                    }
                }))
        } else {
            const objetoCarro = {
                "id": pizzaSeleccionada.id,
                "cantidad": "1",
                "precio": pizzaSeleccionada.price
            }
            setCarro([...carro, objetoCarro])
        }
    };

    const SubtractPizza = (idPizza) => {
        let pizzaActual = carro.find(item => item.id === idPizza)
        if (Number(pizzaActual.cantidad) === 1) {
            setCarro(carro.filter(item => item.id !== idPizza))
        } else {
            setCarro(carro.
                map((i) => {
                    if (i.id === idPizza) {
                        return { ...i, cantidad: Number(i.cantidad) - 1 }
                    } else {
                        return i
                    }
                })
            )
        }
    };

    return (
        <OperationsContext.Provider value={{ carro, setCarro, FormatCoin, total, AddPizza, SubtractPizza }}>
            {children}
        </OperationsContext.Provider>
    );
}

export const useOperationsContext = () => useContext(OperationsContext);