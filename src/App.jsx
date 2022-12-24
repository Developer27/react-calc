import CalcButton from './components/CalcButton/CalcButton';
import './app.css';
import { useState } from 'react';




function App() {
  const [input, setInput] = useState('0');
  
  const onChange = (e) => {
    setInput(e.target.value)
  }

  const setInputValue = (val, ind) => {
    if(ind) {
      setInput('');
    }
    setInput((prev) => prev + val)
  }

  const resetVal = () => {
    setInput('')
  }

  console.log(input)
  return (
   <div className="container">
    <div className="main">
        <input type="text" className='search_inp' value={input} onChange={onChange}/>
      <div className="numbers">
      <div className="numbers_row">
          <CalcButton click={resetVal} number={'ac'}/>
          <CalcButton click={setInputValue} number={'+/-'}/>
          <CalcButton click={setInputValue} number={'%'}/>
          <CalcButton click={setInputValue} number={'/'}/>
        </div>
        <div className="numbers_row">
          <CalcButton click={setInputValue} number={7}/>
          <CalcButton click={setInputValue} number={8}/>
          <CalcButton click={setInputValue} number={9}/>
          <CalcButton click={setInputValue} number={'x'}/>
        </div>
        <div className="numbers_row">
          <CalcButton click={setInputValue} number={4}/>
          <CalcButton click={setInputValue} number={5}/>
          <CalcButton click={setInputValue} number={6}/>
          <CalcButton click={setInputValue} number={'-'}/>
        </div>
        <div className="numbers_row">
          <CalcButton click={setInputValue} number={1}/>
          <CalcButton click={setInputValue} number={2}/>
          <CalcButton click={setInputValue} number={3}/>
          <CalcButton click={setInputValue} number={'+'}/>
        </div>
        <div className="numbers_row">
          <CalcButton click={setInputValue} number={0}/>
          <CalcButton click={setInputValue} number={','}/>
          <CalcButton click={setInputValue} number={'='} inp={input}/>
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
