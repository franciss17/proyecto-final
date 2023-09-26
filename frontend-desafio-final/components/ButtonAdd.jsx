import { useContext } from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useOperationsContext } from "../context/OperationsContext";

export default function ButtonAdd({ idPizza }) {
    const { AddPizza } = useOperationsContext();
    const { user } = useContext(AuthContext);

    const handlePaymentClick = () => {
        if (user) {
            // Usuario ha iniciado sesión, redirigir al pago
            handleAddPizza();
            window.location.href = '/Payment';
        } else {
            // Usuario no ha iniciado sesión, mostrar mensaje
            toast.error("Primero debes iniciar sesión para continuar");
        }
    };

    return (
        <button className="btn btn-danger" onClick={() => {
                AddPizza(idPizza)
                toast.success("Agregaste el producto al carro")
            }}>Añadir <i className="fas fa-shopping-cart"></i>
        </button>
    );
}
