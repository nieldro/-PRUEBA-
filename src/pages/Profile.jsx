import React from "react";
import './Profile.css'; // Importamos el CSS

const Profile = ({ email, password }) => {
  return (
    <div className="profile-container">
      <div className="profile-avatar"></div> {/* Icono de avatar circular */}
      <h2>Perfil del Usuario</h2>
      <div className="profile-details">
        <p>Email: {email}</p>
        <p>Contraseña: {password}</p>
      </div>
      <button className="profile-edit-btn">Editar Perfil</button> {/* Botón de editar */}
    </div>
  );
};

export default Profile;
