
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  const deleteExpense=()=>{
    console.log('delete');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button className='delete' onClick={deleteExpense}>Delete</button>

    </Card>
  );
}
/*return React.createElement(Card,{className:'expense-item'}),
  React.createElement(ExpenseDate,{date:props.date}),
  React.createElement('div',{lassName:"expense-item__description"}),
  React.createElement('h2',"props.title"),
  React.createElement('h3',"props.loction"),
  React.createElement('div',{className:"expense-item__price"},"${props.amount}")*/


export default ExpenseItem;
