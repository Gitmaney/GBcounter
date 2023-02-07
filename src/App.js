import {React, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(prev => prev + 1);
  }

  const decrease = () => {
    if (counter > 0) {
    setCounter(prev => prev - 1);
  }
}

  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="counter">
        <img src={logo} className="logo" alt="logo" />
        
        <div className='btn-container'>
          <button className='button' onClick={decrease}>
            Decrease(-)
          </button> 
          
          <span className='counter-output'> {counter} </span>

          <button className='button' onClick={increase}>
            Increase(+)
          </button>

          
        </div>
        <button className='reset' onClick={reset}>
            Reset
          </button>
    </div>
  );
}

export default App;
