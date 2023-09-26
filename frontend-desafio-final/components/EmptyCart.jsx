import { Link } from "react-router-dom";

export default function EmptyCart() {
    return (
        <div className="carrito">
            <div className="container mt-5 p-5">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="text-center">Carrito <i className="fas fa-shopping-cart"></i></h1>
                    <h5 className="mt-5 text-center">Aún no has agregado ningún producto</h5>
                    <h5 className="text-center">Explora nuestro catálogo aquí:</h5>
                    <Link to="/" className="links fs-1 text-center">
                        <button type="button" className="btn btn-outline-success">Ir al Catálogo</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}