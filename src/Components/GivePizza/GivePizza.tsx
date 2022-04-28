import React, { useState } from 'react';
import './GivePizza.scss';
import ActionButton from '../ActionButton/ActionButton';

const GivePizza = () => {
  const [count, setCount] = useState('');
  const actions = [
    {
      title: 'Pievienot "pica"',
      onClick: () => setCount(`${count} Pica`),
    },
  ];
  return (
    <div className="givepizza__box">
      {actions.map((action) => (
        <ActionButton
          name={action.title}
          key={Math.random()}
          onClick={action.onClick}
        />
      ))}
      <br />
      <span className="givepizza__Box__result">
        Man garšo:
        {count}
      </span>
    </div>
  );
};

export default GivePizza;
