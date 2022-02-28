import './ExpenseItem.css'
import React,{useState} from 'react';
function ExpenseTitle(props){
    const [title,setTitle] =useState(props.title);
   // console.log('Calling');
     
    const clickEvent=()=>{
        setTitle('Updated');
    }

    return <div className="expense-item__description ">The Item is: {title}
     <button onClick={clickEvent}>Change Title</button></div>
}
export default ExpenseTitle;