import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "bangalore",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "chennai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "delhi",
    },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          ></ExpenseItem>
        </div>
      ))}
    </div>
  );
}

export default App;
