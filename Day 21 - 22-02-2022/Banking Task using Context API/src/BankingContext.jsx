import { createContext, useContext, useState } from "react";

export const BankingContext = createContext();

export const BankingProvider = (props) => {
    const [amount, setAmount] = useState(0);
    const [Balance, setBalance] = useState(200);

    const amountHandler = (e) => {
        setAmount(e.target.value);
    }
    const handleWithdraw = () => {
        if(amount>Balance)alert("Not enough Balance")
        else setBalance(Balance-amount)
        setAmount(0)
    };

    const handleDeposit = () => {
        let temp = parseInt(amount);
        setBalance(Balance + temp);
        setAmount(0);

    };

    const handleFD = () => {
        let temp = parseInt(amount);
        let interest = temp + (0.03 * temp);
        setBalance(Balance + interest);
        setAmount(0);
        
    }
    const handleDelete = () => {
        setBalance(0);
    }


    return (
        <BankingContext.Provider value={{Balance, amount, handleWithdraw, handleDeposit, handleFD, handleDelete,amountHandler }}>
            {props.children}
        </BankingContext.Provider>
    )
}