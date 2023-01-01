
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>"${props.amount}"</div>
      </div>
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
