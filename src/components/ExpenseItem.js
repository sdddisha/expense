import React,{useState} from 'react';
import ExpenseAmount from './ExpenseAmount';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';

function ExpenseItem(props) {
    
  let amount=props.amount;
    return(
        <div>
            <ExpenseTitle title={props.title} />
            <ExpenseAmount amount={amount} />

            {/* <h2>Date: {props.date.toLocaleString('en-US',{month:'long'})}</h2> */}

            <ExpenseDate date={props.date} />
          
       
        </div>
    )
    
}
export default ExpenseItem;