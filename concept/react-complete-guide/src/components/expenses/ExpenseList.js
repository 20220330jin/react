import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no Expenses.</h2>
    }

    return <ul className='expenses-list'>
        {props.items.map((expense, index) =>
            <ExpenseItem
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}>
            </ExpenseItem>)}
    </ul>

}

export default ExpenseList;