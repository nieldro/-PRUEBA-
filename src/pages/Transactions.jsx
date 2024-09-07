import React, { useState } from 'react';
import './Transactions.css';

const Transactions = () => {
  const [transactions] = useState([
    { id: 1, type: 'Compra', amount: '$50', date: '2024-01-01' },
    { id: 2, type: 'Venta', amount: '$100', date: '2024-01-02' },
    { id: 3, type: 'Transferencia', amount: '$200', date: '2024-01-03' },
  ]);
  const [filter, setFilter] = useState('');

  const filteredTransactions = transactions.filter(t =>
    t.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="transactions-container">
      <h1>Transactions</h1>
      <input
        type="text"
        placeholder="Filtrar por tipo"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul className="transactions-list">
        {filteredTransactions.map(t => (
          <li key={t.id}>
            <span className="transaction-type">{t.type}</span>
            <span className="transaction-amount">{t.amount}</span>
            <span className="transaction-date">{t.date}</span>
          </li>
        ))}
      </ul>

      {/* Gráfico circular de ejemplo */}
      <div className="chart-container">
        <svg className="chart" viewBox="0 0 150 150">
          <circle className="circle-background" cx="75" cy="75" r="70"></circle>
          <circle className="circle-progress animate-circle" cx="75" cy="75" r="70"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Transactions;
