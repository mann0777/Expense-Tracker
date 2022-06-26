import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';




function Expenses(props) {
  const[filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler= selectedYear=>{
    setFilteredYear(selectedYear);

  };

  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  let expressContent = <p>NO expenses found.</p>;

  if(filteredExpenses.length>0){
    expressContent = filteredExpenses.map((expense)=>(
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
      ))
  }
   



  return (

    <Card className="expenses">
    <ExpensesFilter 
    selected = {filteredYear} 
    onChangeFilter = {filterChangeHandler}/>

    {expressContent}

    </Card>
  );
}

export default Expenses;