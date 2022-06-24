import React from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";





function App(){

  const expenses = [

    {id: 'e1', title: 'Car Insurance', amount: 294, date: new Date(2022, 6, 4)},
    {id: 'e2', title: 'GOOgle', amount:5234, date: new Date(2022, 6, 4)},
    {id: 'e3', title: 'facebook', amount: 194, date: new Date(2022, 6, 4)},
    {id: 'e4', title: 'Yahoo', amount: 794, date: new Date(2022, 7, 4)},

  ];

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
  }


  return(
  
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items = {expenses} />
    </div>
    

  );


}

export default App;