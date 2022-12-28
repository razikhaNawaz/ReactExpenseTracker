
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler=()=>{
    setTitle('updated!');
    console.log(title);
  }
  let [amount, setAmount]=useState(props.amount);
  const changeExpense=()=>{
    setAmount('100$');
    console.log(amount);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={changeExpense}>Change exp</button>
      </div>
      <button onClick={clickHandler}>change title</button>

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
