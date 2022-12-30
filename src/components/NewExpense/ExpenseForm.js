import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=>{
    //const [enteredTitle, setEnteredTitle]=useState('food');
    //const [enteredAmount, setEnteredAmount]=useState('');
    //const [enteredDate, setEnteredDate]=useState('');//for using 3 seperate states
    const [userInput, setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })//to use one state an object needs to be created to store keys//
   const titleChangeHandler=(event)=>{
        //setEnteredTitle(event.target.value);
       //console.log(enteredTitle);
        // setUserInput({
//...userInput,
           // enteredTitle:event.target.value,
        // });//spread operator is used to retain the previos data
        setUserInput((prevState)=>{
            return {...prevState, enteredTitle:event.target.value};
        })
   };
   const amountChangeHandler=(event)=>{
        //setEnteredAmount(event.target.value);
        //console.log(enteredAmount);
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value,
         });
   }
   const dateChangeHandler=(event)=>{
         //setEnteredDate(event.target.value);
         //console.log(enteredDate);
         setUserInput({
            ...userInput,
            enteredDate:event.target.value,
         });
   }
    
    return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2023-12-30" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}

export default ExpenseForm;