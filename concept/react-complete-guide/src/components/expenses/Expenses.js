import { useState } from "react";

import Card from "../ui/Card";

import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {

    console.log(props);

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredChangeHandler = selectedYear => {
        console.log('selected Year' + selectedYear)
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}></ExpenseFilter>
                <ExpenseList items={filteredExpenses}></ExpenseList>
            </Card>
        </div>
    )
}

export default Expenses;