import React, { useState } from 'react';
import './CreditCards.css';

const CreditCards = () => {
  const [cards] = useState([
    { id: 1, number: '**** **** **** 1234', balance: '$5756', holder: 'Alejandro Herrera' },
    { id: 2, number: '**** **** **** 4312', balance: '$45756', holder: 'Alejandro Herrera', blackCard: true },
  ]);

  return (
    <div className="credit-cards-container">
      {cards.map(card => (
        <div key={card.id} className={`card ${card.blackCard ? 'black-card' : ''}`}>
          <div className="card-chip"></div>
          <div className="card-number">{card.number}</div>
          <div className="card-balance">Balance: {card.balance}</div>
          <div className="card-holder">{card.holder}</div>
          <div className="card-logo">VISA</div>
        </div>
      ))}
    </div>
  );
};

export default CreditCards;
