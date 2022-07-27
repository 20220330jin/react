import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: 'Car Insurance', amount: 3002, date: new Date(2022, 3, 24) },
  { title: 'Parts Insurance', amount: 422, date: new Date(2022, 4, 24) },
  { title: 'Laptop Insurance', amount: 1233, date: new Date(2022, 5, 24) }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log('addExpenseHandler');
    // setExpenses([expense, ...expense]);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
