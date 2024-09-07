import React, { useState, useEffect } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Investments = () => {
  const [balance, setBalance] = useState(10000);
  const [investmentHistory, setInvestmentHistory] = useState([10000]);

  const handleInvest = () => {
    const newBalance = balance + 1000;
    setBalance(newBalance);
    setInvestmentHistory([...investmentHistory, newBalance]);
    alert('Inversión realizada por $1000');
  };

  const handleWithdraw = () => {
    if (balance >= 1000) {
      const newBalance = balance - 1000;
      setBalance(newBalance);
      setInvestmentHistory([...investmentHistory, newBalance]);
      alert('Retiro de $1000 realizado');
    } else {
      alert('Fondos insuficientes para retirar');
    }
  };

  const chartData = {
    labels: investmentHistory.map((_, index) => `Día ${index + 1}`),
    datasets: [
      {
        label: 'Historial de Inversión',
        data: investmentHistory,
        borderColor: '#ff7b54',
        backgroundColor: 'rgba(255, 123, 84, 0.5)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="investments-container">
      <h1 className="investments-title">Investments</h1>
      <p className="investments-balance">Balance actual: ${balance}</p>
      <div style={{ textAlign: 'center' }}>
        <button className="investments-button" onClick={handleInvest}>
          Invertir $1000
        </button>
        <button className="investments-button" onClick={handleWithdraw}>
          Retirar $1000
        </button>
      </div>
      <div className="investments-chart">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Investments;
