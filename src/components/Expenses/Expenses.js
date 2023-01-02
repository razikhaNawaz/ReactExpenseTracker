import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]=useState('2020');
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length===0 ? <p>No expenses found!</p> : filteredExpenses.map((expense)=> (
        <ExpenseItem 
        key={expense.id}
        date={expense.date}
        title={expense.title} 
        amount={expense.amount} 
         />
        )) 
        }
        {filteredExpenses.length===1 ? <p>Single expense found please add more...</p> : filteredExpenses.map((expense)=> (
        <ExpenseItem 
        key={expense.id}
        date={expense.date}
        title={expense.title} 
        amount={expense.amount} 
         />
        )) 
        }
      
    </Card>
  );
}

export default Expenses;