import React from 'react';
import './ExpenseItem.css'
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses() {
    const products= [
      {
          id:'e1',
          title:'iphone',
          amount:50000,
       date:new Date(2021,2,28),
  
      },
      {
       id:'e2',
       title:'galaxy s30',
       amount:45000,
    date:new Date(2021,2,28),
  
   },
   {
       id:'e3',
       title:'mi note 10',
       amount:25000,
    date: new Date(2021,2,28),
  
   }
   ]
    return (
      <Card className="abc">
       <ExpenseItem title={products[0].title} 
       amount={products[0].amount} 
       date={products[0].date} 
       /> 
        <ExpenseItem title={products[1].title} 
       amount={products[1].amount} 
       date={products[1].date} 
       />
       <ExpenseItem title={products[2].title} 
       amount={products[2].amount} 
       date={products[2].date} 
       />
      </Card>
    );
  }
  
  export default Expenses;