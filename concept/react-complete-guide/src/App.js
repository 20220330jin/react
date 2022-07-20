import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 3002, date: new Date(2022, 3, 24) },
    { title: 'Parts Insurance', amount: 422, date: new Date(2022, 4, 24) },
    { title: 'Laptop Insurance', amount: 1233, date: new Date(2022, 5, 24) }
  ];
  return (
    <div>
      <h2>Let's get start!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
