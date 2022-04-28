import React, { useState } from 'react';
import './Cards.scss';
import { Console } from 'console';
import ActionButton from '../ActionButton/ActionButton';
import Card from '../Card/Card';

const Cards = () => {
  const cardlist = [
    {
      id: 1,
      title: 'First Card',
    },
    {
      id: 2,
      title: 'Second Card',
    },
    {
      id: 3,
      title: 'Third Card',
    },
    {
      id: 4,
      title: 'Fourth Card',
    },
    {
      id: 5,
      title: 'Fifth Card',
    },
    {
      id: 6,
      title: 'Sixth Card',
    },
  ];
  const [Data, setData] = useState(cardlist);
  const removeCard = (index:number) => {
    const newArr = [...Data];
    newArr.splice(index, 1);
    return newArr;
  };
  const actions = [
    {
      title: 'Reset',
      onClick: () => setData(cardlist),
    },
    {
      title: 'Remove all',
      onClick: () => setData([]),
    },
    {
      title: 'Make all titles UPPERCASE',
      onClick: () => setData(Data.map((object) => ({ id: object.id, title: object.title.toUpperCase() }))),
    },
  ];
  return (
    <div className="cards">
      <div className="cards__buttons">
        {actions.map((action) => (
          <ActionButton
            name={action.title}
            key={Math.random()}
            onClick={action.onClick}
          />
        ))}
      </div>
      <div className="cards__cards">
        {Data.map((card, index) => (
          <div
            key={Math.random()}
            className="card"
            id={`${card.id}`}
          >
            <div className="card__xcont">
              <svg
                onClick={() => (setData(removeCard(index)))}
                className="card__x"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
              </svg>
            </div>
            <span className="card__id">
              ID :
              {card.id}
            </span>
            <span className="card__title">
              Title:
              {card.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
// Object.fromEntries(Object.entries(card)
//                   .filter((key) => (key[0][1].toString() !== card.id.toString())))
