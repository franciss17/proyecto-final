import React, { useState } from "react";

export default function Payment() {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", cardNumber, expiry, cvv);
    };

    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                margin: 0,
                backgroundColor: "#f5f5f5",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    padding: "30px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    width: "300px",
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Página de Pago</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="card-number">Número de tarjeta</label>
                    <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        placeholder="Número de tarjeta"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        style={{
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                    />

                    <label htmlFor="expiry">Fecha de vencimiento</label>
                    <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        placeholder="MM/AA"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        required
                        style={{
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                    />

                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        style={{
                            padding: "10px",
                            marginBottom: "20px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#007BFF",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            width: "100%",
                        }}
                    >
                        Pagar
                    </button>
                </form>
            </div>
        </div>
    );
}
