import CalcButton from './components/CalcButton/CalcButton';
import './app.css';

function App() {
  return (
   <div className="container">
    <div className="main">
        <input type="text" className='search_inp' />
      <div className="numbers">
      <div className="numbers_row">
          <CalcButton number={'ac'}/>
          <CalcButton number={'+/-'}/>
          <CalcButton number={'%'}/>
          <CalcButton number={'/'}/>
        </div>
        <div className="numbers_row">
          <CalcButton number={7}/>
          <CalcButton number={8}/>
          <CalcButton number={9}/>
          <CalcButton number={'x'}/>
        </div>
        <div className="numbers_row">
          <CalcButton number={4}/>
          <CalcButton number={5}/>
          <CalcButton number={6}/>
          <CalcButton number={'-'}/>
        </div>
        <div className="numbers_row">
          <CalcButton number={1}/>
          <CalcButton number={2}/>
          <CalcButton number={3}/>
          <CalcButton number={'+'}/>
        </div>
        <div className="numbers_row">
          <CalcButton number={0}/>
          <CalcButton number={','}/>
          <CalcButton number={'='}/>
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
