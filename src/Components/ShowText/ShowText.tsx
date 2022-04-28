import React, { useState } from 'react';
import './ShowText.scss';
import ActionButton from '../ActionButton/ActionButton';

const ShowText = () => {
  const [inputValue, setInputValue] = useState('Some Text');
  const [isVisible, setisVisible] = useState(true);
  const actions = [
    {
      title: 'Parādīt tekstu',
      onClick: () => ((isVisible) ? setisVisible(false) : setisVisible(true)),
    },
  ];
  return (
    <div className="ShowText__box">
      <div className="ShowText__box__left">
        {actions.map((action) => (
          <ActionButton
            name={action.title}
            key={Math.random()}
            onClick={action.onClick}
          />
        ))}
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Some text"
        />
      </div>
      <div className="ShowText__box__right">
        <h1
          hidden={!isVisible}
          className="ShowText__result"
        >
          {inputValue}
        </h1>
      </div>
    </div>
  );
};

export default ShowText;
