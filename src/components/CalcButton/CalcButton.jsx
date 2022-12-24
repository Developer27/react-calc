import './CalcButton.css';

export default function CalcButton(props) {

  const result = (e) => {
    if(e.target.innerHTML === '=') {
      console.log(props.inp.includes('-'))
       if(props.inp.includes('-')) {
          const resultA = Number(props.inp.substr(0, props.inp.indexOf('-')));
          const resultB = Number(props.inp.substr(props.inp.indexOf('-')+1, props.inp.length-1));
          props.click(minus(resultA,resultB),true); 
        }
        if(props.inp.includes('+')) {
          const resultA = Number(props.inp.substr(0, props.inp.indexOf('+')));
          const resultB = Number(props.inp.substr(props.inp.indexOf('+')+1, props.inp.length-1));
          props.click(sum(resultA,resultB),true); 
        }
    } else {
      if(props.inp === '0') {
        props.click(e.target.value);
      }
      props.click(e.target.value);
    }

  }

 function sum(a,b) {
  return a+b;
 }

 function minus(a,b) {
  return a-b;
 }
  return (
    <button onClick={result} value={props.number} className="number_btn">{props.number}</button>
  )
}
