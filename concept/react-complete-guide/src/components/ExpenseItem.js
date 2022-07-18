import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 2, 28);
    const expenseTtile = 'Car Insurance';
    const expenseAmount = 294.53;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTtile}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;