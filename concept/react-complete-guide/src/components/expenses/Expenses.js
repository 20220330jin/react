import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

import './Expenses.css'

const Expenses = (props) => {
    console.log(props)
    return (
        <Card className="expenses">
            {props.items.map((expense, index) =>
                <ExpenseItem
                    key={index}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}>
                </ExpenseItem>)}  
        </Card>
    )
}

export default Expenses;