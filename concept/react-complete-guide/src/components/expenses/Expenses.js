import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

import './Expenses.css'

const Expenses = (props) => {
    console.log(props)
    return (
        <Card className="expenses">
            {props.items.map(expense =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}>
                </ExpenseItem>)}
        </Card>
    )
}

export default Expenses;