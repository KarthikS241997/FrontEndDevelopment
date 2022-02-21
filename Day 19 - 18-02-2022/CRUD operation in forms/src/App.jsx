import './App.css';
import React, {useState,useEffect} from 'react';
import Tweets from "./Tweeter/Tweets";
import Crud from './CRUD/Crud';

const App = () => {

    //Name State
    const [newName, setnewName] = useState();

    //Email state
    const [newEmail, setnewEmail] = useState();

    //contacts State
    const [contacts, setcontacts] = useState([
        { name: "ABC", email: "abc@example.com" },
        { name: "DEF", email: "def@example.com" },
        { name: "HIJ", email: "hij@example.com" },
    ]);

//Handle Name Change
    const handleNameChange = (event) => {
        setnewName(event.target.value);
    }
//Handle Email change
    const handleEmailChange = (event) => {
        setnewEmail(event.target.value);
    }
//handle Contact Change
    const handleContactSubmit = () => {
        if (newName === "" || newEmail === "") {
            alert("Enter the details");
        }
        else {
            setcontacts([...contacts, { name: newName, email: newEmail }]);
            setnewName("");
            setnewEmail("");
        }

    }

//Handle Delete Operation
    const handleDelete = (emailID) => {
        const contactCopy = [...contacts];
        contactCopy = contacts.filter(item => item.email !== emailID);
        setcontacts(contactCopy);
    }
//Handle Update Operation
    const handleUpdate = (emailId) => {
        const contactCopy = [...contacts];
        const index = contactCopy.findIndex(item => item.email === emailId);
        contactCopy[index] = { name: newName, email: newEmail };
        setcontacts(contactCopy);
        setnewName("");
        setnewEmail("");
    }
    return(
        <>
    <div className="mainapp">
        <form>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" onChange={handleNameChange} value={newName}/>
       </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmailChange} value={newEmail}/>
      </div>
    </div>
    <button type="button" className="btn btn-primary mt-3" onClick={handleContactSubmit}>Add Contact</button>
      </form>
    </div>
    <Crud contacts={contacts} handleDeleteProp={handleDelete} handleUpdateProp={handleUpdate}/>
    </>
    
    );
//     const [info, setinfo] = useState({
//         fname:"",
//         lname:"",
//         age:0
//     });
//     const handleClick=(event)=>{
//         event.preventDefault();
//         console.log(info);
//     }
//     const handleFname=(event)=>{
//         console.log(event.target.value);
//         setinfo({...info,fname:event.target.value});
//     }
//     const handleLname=(event)=>{
//         console.log(event.target.value);
//         setinfo({...info,lname:event.target.value})
//     }
//     const handleAge=(event)=>{
//         console.log(event.target.value);
//         setinfo({...info,age:event.target.value})
//     }
// return( <>
// <form action="">
//     <input type="text" placeholder='Enter First name' onChange={handleFname} value={info.fname}/>
//     <input type="text" placeholder='Enter Last Name' onChange={handleLname} value={info.lname}/>
//     <input type="number" placeholder='Enter age' onChange={handleAge} value={info.age}/>
//     <button onClick={handleClick}>Click Me</button>
// </form>
// {/* <Tweets></Tweets> */}
// </>
// );

}

export default App