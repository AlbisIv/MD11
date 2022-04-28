import React, { useState } from 'react';
import './ChangeTextBox.scss';
import ActionButton from '../ActionButton/ActionButton';

const ChangeTextBox = () => {
  const [count, setCount] = useState('Nav nospiests');
  const actions = [
    {
      title: 'Mainīt tekstu uz "nospiests"',
      onClick: () => setCount('nospiests'),
    },
  ];
  return (
    <div className="ChangeTextBox__box">
      {actions.map((action) => (
        <ActionButton
          name={action.title}
          key={Math.random()}
          onClick={action.onClick}
        />
      ))}
      <br />
      <span
        className="ChangeTextBox__result"
      >
        {count}
      </span>
    </div>
  );
};

export default ChangeTextBox;
