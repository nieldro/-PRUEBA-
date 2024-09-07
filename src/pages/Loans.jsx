import React, { useState } from 'react';

const Loans = () => {
  const [amount, setAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(5);
  const [term, setTerm] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const interest = interestRate / 100 / 12;
    const payment = (amount * interest) / (1 - Math.pow(1 + interest, -term));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="loans-container">
      <h1>Loans</h1>
      <div>
        <label>Monto del préstamo: </label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Ingresa el monto"
        />
      </div>
      <div>
        <label>Tasa de interés (%): </label>
        <input
          type="number"
          value={interestRate}
          onChange={e => setInterestRate(e.target.value)}
          placeholder="Tasa de interés"
        />
      </div>
      <div>
        <label>Plazo (meses): </label>
        <input
          type="number"
          value={term}
          onChange={e => setTerm(e.target.value)}
          placeholder="Plazo en meses"
        />
      </div>
      <button onClick={calculateLoan}>Calcular pago mensual</button>
      <p>Pago mensual estimado: ${monthlyPayment}</p>
    </div>
  );
};

export default Loans;
