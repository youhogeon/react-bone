import React from 'react';
import './App.scss';
import img from '../Images/logo.svg';

const banner = 'ReactBone';

const App = () => (
  <div>
    <img src={img} alt="" id="logo" />
    <div id="banner">{banner}</div>
  </div>);

export default App;
