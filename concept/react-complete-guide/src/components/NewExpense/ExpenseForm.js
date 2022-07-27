import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (e) => {
        console.log('title Changed!');
        console.log(e.target.value);
        // setEnteredTitle(e.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: e.target.value,
        })
    }

    const amountChangeHandler = (e) => {
        // setEnteredAmount(e.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value,
        })
    }

    const amountDateHandler = (e) => {
        // setEnteredDate(e.target.value);
        setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        })
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={amountDateHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;