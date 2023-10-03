import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Perfil del usuario</h2>
      {user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Usuario no autenticado</p>
      )}
    </div>
  );
}

export default UserProfile;