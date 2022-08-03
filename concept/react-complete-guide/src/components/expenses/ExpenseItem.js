import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log('clicked');
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* event props -> function */}
                <button onClick={clickHandler}>Change Title</button>
            </Card >
        </li>
    )
}

export default ExpenseItem;