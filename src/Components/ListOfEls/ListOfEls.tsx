import React, { FC } from 'react';
import './ListOfEls.scss';

type ListOfElsprops = {
  arrayofEls :number[]
}

const ListOfEls: FC<ListOfElsprops> = ({ arrayofEls }) => (
  <div className="listofels__container">
    {arrayofEls.map((el) => (
      <div
        key={Math.random()}
        className="listofels__div"
        id={`${el}`}
      >
        {el}
      </div>
    ))}
  </div>
);
export default ListOfEls;
