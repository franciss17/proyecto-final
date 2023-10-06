import { useUserContext } from "../context/UserContext";
import { useOperationsContext } from "../context/OperationsContext";
import EmptyCart from "../components/EmptyCart";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Cart() {
    const { pizzas } = useUserContext();
    const { carro, total, SubtractPizza, AddPizza, FormatCoin } = useOperationsContext();
    const { user } = useContext(AuthContext);
    const [showMessage, setShowMessage] = useState(false);

    const handlePaymentClick = () => {
        if (user) {
            // Usuario ha iniciado sesión, redirigir al pago
            window.location.href = '/Payment';
        } else {
            // Usuario no ha iniciado sesión, mostrar mensaje
            setShowMessage(true);
        }
    };

    if (carro.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="container p-5 bg-light">
            {showMessage && (
                <div className="alert alert-danger text-center" role="alert">
                    Primero debes iniciar sesión para continuar.
                </div>
            )}
            <div>
                <h1 className="text-center">Carro <i className="fas fa-shopping-cart"></i></h1>
                <div>
                    <table className="table table-striped-columns mt-5">
                        <tbody>
                            {carro.map((item) => {
                                const pizza = pizzas.find((pizza) => pizza.id === item.id);
                                const totalPrice = Number(item.precio) * Number(item.cantidad);
                                return (
                                    <tr key={item.id}>
                                        <th scope="row" className="align-middle">
                                            <img src={pizza.img} className="img-cart" alt="Pizza" /> {pizza.name}
                                        </th>
                                        <th className="text-center fs-4 align-middle">{FormatCoin(totalPrice)}</th>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-danger" onClick={() => SubtractPizza(item.id)}>
                                                -
                                            </button>
                                            <button className="btn btn-outline">{item.cantidad}</button>
                                            <button className="btn btn-sm btn-primary" onClick={() => AddPizza(item.id)}>
                                                +
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <h4 className="text-center">Total: {FormatCoin(total)}</h4>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/Login" className="links fs-1 text-center">
                            <button type="button" className="btn btn-outline-success" onClick={handlePaymentClick}>
                                Ir al pago💲
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};