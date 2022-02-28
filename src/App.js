import React from 'react';
import './App.css';

import ExpenseItem from './components/ExpenseItem';
function App() {
      const products= [
        {
            id:'e1',
            title:'iphone',
            amount:50000,
         date:new Date(2021,2,25),
    
        },
        {
         id:'e2',
         title:'galaxy s30',
         amount:45000,
      date:new Date(2021,2,26),
    
     },
     {
         id:'e3',
         title:'mi note 10',
         amount:25000,
      date: new Date(2021,2,27),
    
     },
     {
      id:'e4',
      title:'realme x7',
      amount:34000,
   date: new Date(2021,2,28),
 
  }
     ]
      return (
        <>
        <div className="App">
        <h1>List of Items</h1></div>
         
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
          <ExpenseItem title={products[3].title} 
         amount={products[3].amount} 
         date={products[3].date} 
         />
        
        </>
        
      );
    }
export default App;
