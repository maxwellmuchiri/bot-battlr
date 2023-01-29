import React from 'react';

const BotCard = ({ bot }) => {
  return (
    <div className="BotCard">
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
    </div>
  );
};

export default BotCard;
