import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [countnum, setCounts]=useState({
    count1:0,
    count2:6
  });

  const handleClickone=()=>{
    setCounts({...countnum,count1:countnum.count1+1});
    console.log(countnum);
  }

  const handleClicktwo=()=>{
    setCounts({...countnum,count2:countnum.count2+1});
  }
  
  const [count,setCount] = useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  return <>
  <h1>{count}</h1>
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>Decrement</button>
  <hr />
  <h1>{countnum.count1}</h1>
  <button onClick={handleClickone}>First</button>
  <h1>{countnum.count2}</h1>
  <button onClick={handleClicktwo}>Second</button>
  </>

}

export default App