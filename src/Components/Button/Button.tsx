import React, { FC } from 'react';
import './Button.scss';

type Buttonprops = {
  name: string;
  onClick: () => void;
}

const Button: FC<Buttonprops> = ({ name, onClick }) => (
  <button className="math--button" onClick={onClick}>{name}</button>
);
export default Button;
