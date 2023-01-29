import React from 'react';
import BotCollection from './BotCollection';

const BotArmy = ({ bots }) => {
  return (
    <div className="BotArmy">
      <BotCollection bots={bots} />
    </div>
  );
};

export default BotArmy;
