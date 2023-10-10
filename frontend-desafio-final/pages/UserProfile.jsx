import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function UserProfile() {
  const { token } = useContext(AuthContext);
  useEffect(async () => {
    let headersList = {
      "Authorization": `Bearer ${token}`
    }

    let response = await fetch("http://localhost:3000/usuarios", {
      method: "GET",
      headers: headersList
    });

    let data = await response.text();
    console.log(data);
  });

  return (
    <div>
      <h2>Perfil del usuario</h2>
      {true ? (
        <div>
          <p>Nombre: </p>
          <p>Email: </p>
        </div>
      ) : (
        <p>Usuario no autenticado</p>
      )}
    </div>
  );
}

export default UserProfile;
