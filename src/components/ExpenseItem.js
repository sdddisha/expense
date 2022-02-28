import './Card.css';
import Card from './Card';
import ExpenseAmount from './ExpenseAmount';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import './ExpenseItem.css'

function ExpenseItem(props) {
    
  let amount=props.amount;
    return(
        <>
        <Card className="expenses">
            <div className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseTitle title={props.title} />
            <ExpenseAmount amount={amount} />
           
           

            {/* <h2>Date: {props.date.toLocaleString('en-US',{month:'long'})}</h2> */}

            
            </div>
       
        </Card>
        </>
    )
    
}
export default ExpenseItem;