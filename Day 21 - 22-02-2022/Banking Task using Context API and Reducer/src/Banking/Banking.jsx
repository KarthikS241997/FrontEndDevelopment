import React, { useContext } from 'react'
import { BankingContext } from '../BankingContext'

const Banking = () => {
    const {balance,Balance, amount, handleWithdraw,handleDeposit,handleFD,handleDelete, amountHandler,dispatch,resetInput }  = useContext(BankingContext);
    console.log(amount);

    return (
        <>
            <div className="container">
                <h1>Balance is ${ balance}</h1>
                <input type="text" placeholder='Enter amount' value={amount} onChange={ amountHandler}/>
            <button onClick={() => {dispatch({type:"WITHDRAW" , amount});resetInput();}}>Withdraw</button>
                <button onClick={() => { dispatch({ type: "DEPOSIT", amount }); resetInput(); }}>Deposit</button>
            <button onClick={() => dispatch({type:"FD" , amount})}>Fixed Deposit</button>
            <button onClick={() => dispatch({type:"DELETE" , amount})}>Delete Account</button>
            </div>

      </>

  )
}

export default Banking