import './App.css';
import React, {useState,useEffect} from 'react';
import Tweets from "./Tweeter/Tweets";

const App = () => {
    const [info, setinfo] = useState({
        fname:"",
        lname:"",
        age:0
    });
    const handleClick=(event)=>{
        event.preventDefault();
        console.log(info);
    }
    const handleFname=(event)=>{
        console.log(event.target.value);
        setinfo({...info,fname:event.target.value});
    }
    const handleLname=(event)=>{
        console.log(event.target.value);
        setinfo({...info,lname:event.target.value})
    }
    const handleAge=(event)=>{
        console.log(event.target.value);
        setinfo({...info,age:event.target.value})
    }
return( <>
<form action="">
    <input type="text" placeholder='Enter First name' onChange={handleFname} value={info.fname}/>
    <input type="text" placeholder='Enter Last Name' onChange={handleLname} value={info.lname}/>
    <input type="number" placeholder='Enter age' onChange={handleAge} value={info.age}/>
    <button onClick={handleClick}>Click Me</button>
</form>
{/* <Tweets></Tweets> */}
</>
);

}

export default App