import React, { useContext } from 'react'
import { BankingContext } from '../BankingContext'

const Banking = () => {
    const {Balance, amount, handleWithdraw,handleDeposit,handleFD,handleDelete, amountHandler }  = useContext(BankingContext);
    console.log(amount);
    return (
        <>
            <div className="container">
                <h1>Balance is ${ Balance}</h1>
                <input type="text" placeholder='Enter amount' value={amount} onChange={ amountHandler}/>
            <button onClick={handleWithdraw}>Withdraw</button>
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleFD}>Fixed Deposit</button>
            <button onClick={handleDelete}>Delete Account</button>
            </div>

      </>

  )
}

export default Banking