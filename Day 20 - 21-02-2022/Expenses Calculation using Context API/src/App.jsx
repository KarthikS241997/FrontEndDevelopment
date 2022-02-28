import React, { useState } from 'react';
import './App.css';
import { ExpenseProvider } from './ExpenseContext';
import AddEntry from './Expenses/AddEntry';
import Entries from './Expenses/Entries';
import Summary from './Expenses/Summary';
import TotalBalance from './Expenses/TotalBalance';


const App = () => {

  return (
    <>
      <ExpenseProvider>
      <div className="container">
      <TotalBalance></TotalBalance>
        <Summary></Summary>
        <AddEntry></AddEntry>
        <Entries></Entries>
      </div>
      </ExpenseProvider>

    </>
   )
}

export default App