import { createContext, useContext, useReducer, useState } from "react";

export const BankingContext = createContext();

const bankingReduce = (state, action) => {
    switch (action.type) {
        case 'WITHDRAW':
            return state - parseInt(action.amount);
        case 'DEPOSIT':
            return state + parseInt(action.amount);
        case 'FD':
            return state * 1.05;
        case 'DELETE':
                return 0;
    }
}

export const BankingProvider = (props) => {
    const [balance, dispatch] = useReducer(bankingReduce, 0);
    const [amount, setAmount] = useState(0);
    const [Balance, setBalance] = useState(200);

    const resetInput = () => {
        setAmount("");
    }

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
        <BankingContext.Provider value={{balance,Balance, amount, handleWithdraw, handleDeposit, handleFD, handleDelete,amountHandler,dispatch,resetInput }}>
            {props.children}
        </BankingContext.Provider>
    )
}