import logo from './logo.svg';
import './App.css';
import Image from './Image';
import DataState from './context/DataState';
import React, { useContext } from 'react';
import DataContext from './context/DataContext';
import Customize from './Customize';

function App() {

  return (
    <DataState>
      <div className="App">
        <div className="Header">ALPACA GENERATOR</div>
        <div className="Container">
          <div className='LeftImage'>
            <Image />
          </div>
          <div className='RightCustomize'>
            <Customize />
          </div>
        </div>
      </div >
    </DataState>
  );
}

export default App;
