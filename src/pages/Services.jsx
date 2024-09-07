import React, { useState } from 'react';

const Services = () => {
  const [service, setService] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const requestService = () => {
    if (service) {
      setAlertMessage(`Has solicitado el servicio de ${service}`);
      setTimeout(() => {
        setAlertMessage(''); // Limpiar mensaje de alerta después de 3 segundos
      }, 3000);
    } else {
      setAlertMessage('Por favor selecciona un servicio');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
    }
  };

  return (
    <div className="services-container">
      <h1>Services</h1>
      <select
        className="service-select"
        value={service}
        onChange={e => setService(e.target.value)}
      >
        <option value="">Selecciona un servicio</option>
        <option value="Asesoría Financiera">Asesoría Financiera</option>
        <option value="Seguro de Vida">Seguro de Vida</option>
        <option value="Consultoría de Inversiones">Consultoría de Inversiones</option>
      </select>
      <button className="service-button" onClick={requestService}>
        Solicitar servicio
      </button>

      {/* Mensaje de alerta visual */}
      {alertMessage && <div className="alert-message">{alertMessage}</div>}
    </div>
  );
};

export default Services;
