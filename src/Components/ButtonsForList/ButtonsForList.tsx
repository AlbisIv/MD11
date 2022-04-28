/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { FC, useState } from 'react';
import './ButtonsForList.scss';
import ReactDOM from 'react-dom';
import ActionButton from '../ActionButton/ActionButton';

// type ButtonsForListprops = {
//   arrayofEls :number[],
// }
const ButtonsForList = () => {
  const startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [array, setarray] = useState(startArray);
  const actions = [
    {
      title: 'Remove from end',
      onClick: () => {
        setarray(array.slice(0, -1));
      },

    },
    {
      title: 'Remove from start',
      onClick: () => {
        setarray(array.slice(1, array.length));
      },

    },
    {
      title: 'Reset',
      onClick: () => {
        setarray(startArray);
      },

    },
    {
      title: 'Remove all',
      onClick: () => {
        setarray([]);
      },

    },
    {
      title: 'Show > 5',
      onClick: () => {
        setarray(array.filter((index) => index > 5));
      },
    },
    {
      title: 'All numbers x2',
      onClick: () => {
        setarray(array.map((el) => (el * 2)));
      },
    },
    {
      title: 'All numbers /10',
      onClick: () => {
        setarray(array.map((el) => (el / 10)));
      },
    },
  ];
  return (
    <div className="ButtonsForList">
      <div className="button__container">
        {actions.map((action) => (
          <ActionButton
            name={action.title}
            key={Math.random()}
            onClick={action.onClick}
          />
        ))}
      </div>
      <div className="listofels__container">
        {array.map((el) => (
          <div
            key={Math.random()}
            className="listofels__div"
            id={`${el}`}
            onClick={() => (setarray(array.filter((index) => index !== el)))}
          >
            {el}
          </div>
        ))}

      </div>
    </div>
  );
};

export default ButtonsForList;
