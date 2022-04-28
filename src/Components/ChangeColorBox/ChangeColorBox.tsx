import React, { useState } from 'react';
import './ChangeColorBox.scss';
import ActionButton from '../ActionButton/ActionButton';

const ChangeColorBox = () => {
  const [count, setCount] = useState('yellow');
  const actions = [
    {
      title: 'mainīt kuba krāsu"',
      onClick: () => setCount('red'),
    },
  ];
  return (
    <div className="ChangeColorBox__box">
      {actions.map((action) => (
        <ActionButton
          name={action.title}
          key={Math.random()}
          onClick={action.onClick}
        />
      ))}
      <br />
      <div
        style={{ backgroundColor: count }}
        className="ChangeColorBox__Box__result"
      />
    </div>
  );
};

export default ChangeColorBox;
