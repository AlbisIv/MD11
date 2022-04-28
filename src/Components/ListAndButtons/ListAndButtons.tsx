import React, { useState } from 'react';
import './ListAndButtons.scss';
import ButtonsForList from '../ButtonsForList/ButtonsForList';
import ListOfEls from '../ListOfEls/ListOfEls';

const ListAndButtons = () => {
  const [data, setData] = useState('');

  return (
    <div className="ListAndButtons__box">
      <ButtonsForList />
      <ListOfEls arrayofEls={[]} />

      <div />
    </div>
  );
};

export default ListAndButtons;
