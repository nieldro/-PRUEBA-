import React, { useState } from 'react';

const Privileges = () => {
  const [privileges, setPrivileges] = useState({
    accesoVip: true,
    descuentos: false,
  });

  const togglePrivilege = (privilege) => {
    setPrivileges(prev => ({ ...prev, [privilege]: !prev[privilege] }));
  };

  return (
    <div className="privileges-container">
      <h1>My Privileges</h1>

      <div className={`privilege-box ${privileges.accesoVip ? 'active-privilege' : ''}`}>
        <label className="privilege-label">
          <div className="privilege-checkbox">
            <input
              type="checkbox"
              checked={privileges.accesoVip}
              onChange={() => togglePrivilege('accesoVip')}
            />
            Acceso VIP
          </div>
        </label>
      </div>

      <div className={`privilege-box ${privileges.descuentos ? 'active-privilege' : ''}`}>
        <label className="privilege-label">
          <div className="privilege-checkbox">
            <input
              type="checkbox"
              checked={privileges.descuentos}
              onChange={() => togglePrivilege('descuentos')}
            />
            Descuentos exclusivos
          </div>
        </label>
      </div>
    </div>
  );
};

export default Privileges;
