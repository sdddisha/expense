import React from 'react';
import './App.css';

import Expenses from './components/Expenses';

function App() {
      const products= [
        {
            id:'e1',
            title:'iPhone 11',
            amount:50000,
         date:new Date(2021,2,25),
    
        },
        {
         id:'e2',
         title:'Galaxy S30',
         amount:45000,
      date:new Date(2021,2,26),
    
     },
     {
         id:'e3',
         title:'Mi note 10',
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
       <Expenses products={products} />
        </div>
      </>
      );
    }
export default App;
