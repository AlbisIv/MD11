import React, { useState } from 'react';
import './PlusMinusbox.scss';
import Button from '../Button/Button';

const PlusMinusbox = () => {
  const [count, setCount] = useState(0);
  const actions = [
    {
      title: 'Reset',
      onClick: () => setCount(0),
    },
    {
      title: '+',
      onClick: () => setCount(count + 1),
    },
    {
      title: '-',
      onClick: () => setCount(count - 1),
    },
  ];
  return (
    <div className="PlusMinusbox">
      {actions.map((action) => (
        <Button
          name={action.title}
          key={Math.random()}
          onClick={action.onClick}
        />
      ))}

      <span className="PlusMinusBox__result">{count}</span>
    </div>
  );
};

export default PlusMinusbox;
