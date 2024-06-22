import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Display from './components/display/display'
import Buttons from './components/buttonsContainer/buttons'
function App() {

  const [display, setdisplay] = useState('');

  const [operator, setoperator] = useState('');
  const [result, setresult] = useState('');

  const handleClick = (value) => {
    setdisplay(display + value);
    if (value == 'C') {
      setdisplay('');
      setresult('');
      setoperator('');
    }
    else if (['+', '-', '/', '+/-', '%', '*'].includes(value)) {
      setoperator(value);
      setresult(display);
      setdisplay('');
    }
    else if (value == '=') {
     
      if (result && display != '') {
        let oldValue=parseFloat(result);
        let currentValue=parseFloat(display);

        switch (operator) {
          case '+':
            setdisplay((oldValue + currentValue).toString());
            break;
          case '-':
            setdisplay((oldValue - currentValue).toString());
            break;
          case '*':
            setdisplay((oldValue * currentValue).toString());
            break;
          case '/':
            setdisplay((oldValue / currentValue).toString());
            break;
            case '%':
            setdisplay((oldValue % currentValue).toString());
            break;
          default:
            break;
        }
        setresult(null);
        setoperator(null);

      }
      else{
        setdisplay("Error");
      }
    }
    else {
      setdisplay(display + value);
    }

  }
  return (
    <>
      <div className="body-container d-flex align-items-center justify-content-center">
        <div className="container p-3">
          <Display value={display} />
          <Buttons onButtonClick={handleClick} />
        </div>
      </div>
    </>
  )
}

export default App
