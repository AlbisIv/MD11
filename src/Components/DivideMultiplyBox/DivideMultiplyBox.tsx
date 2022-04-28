import React, { useState } from 'react';
import './DivideMultiplyBox.scss';
import Button from '../Button/Button';

const DivideMultiplyBox = () => {
  const [count, setCount] = useState(0);
  const actions = [
    {
      title: 'Reset',
      onClick: () => setCount(0),
    },
    {
      title: '+',
      onClick: () => setCount(count + 10),
    },
    {
      title: '-',
      onClick: () => setCount(count - 10),
    },
    {
      title: '*',
      onClick: () => setCount(count * 10),
    },
    {
      title: '/',
      onClick: () => setCount(count / 10),
    },
  ];
  return (
    <div className="DivideMultiplyBox">
      {actions.map((action) => (
        <Button
          name={action.title}
          key={Math.random()}
          onClick={action.onClick}
        />
      ))}

      <span className="DivideMultiplyBox__result">{count}</span>
    </div>
  );
};

export default DivideMultiplyBox;
