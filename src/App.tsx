import React, { useState } from 'react';
import './App.scss';
import './reset.scss';
import PlusMinusbox from './Components/PlusMinusBox/PlusMinusbox';
import DivideMultiplyBox from './Components/DivideMultiplyBox/DivideMultiplyBox';
import GivePizza from './Components/GivePizza/GivePizza';
import ChangeColorBox from './Components/ChangeColorBox/ChangeColorBox';
import ChangeTextBox from './Components/ChangeTextBox/ChangeTextBox';
import ShowText from './Components/ShowText/ShowText';
import ButtonsForList from './Components/ButtonsForList/ButtonsForList';
import Cards from './Components/Cards/Cards';
// State variables
const App = () => (
  <div className="App">
    <PlusMinusbox />
    <DivideMultiplyBox />
    <GivePizza />
    <div className="changeThings__container">
      <ChangeColorBox />
      <ChangeTextBox />
    </div>
    <ShowText />
    <ButtonsForList />
    <Cards />
  </div>
);
export default App;
