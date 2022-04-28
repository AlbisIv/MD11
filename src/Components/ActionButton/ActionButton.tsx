import React, { FC } from 'react';
import './ActionButton.scss';

type ActionButtonprops = {
  name: string;
  onClick: () => void;
}

const ActionButton: FC<ActionButtonprops> = ({ name, onClick }) => (
  <button className="actionbutton" onClick={onClick}>{name}</button>
);
export default ActionButton;
