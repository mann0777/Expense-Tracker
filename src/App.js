import React from "react";

import ExpenseItem from "./component/ExpenseItem";



function App(){

  const expenses = [

    {id: 'e1', title: 'Car Insurance', amount: 294, date: new Date(2022, 6, 4)},
    {id: 'e2', title: 'GOOgle', amount:5234, date: new Date(2022, 6, 4)},
    {id: 'e3', title: 'facebook', amount: 194, date: new Date(2022, 6, 4)},
    {id: 'e4', title: 'Yahoo', amount: 794, date: new Date(2022, 7, 4)},

  ];


  return(
    <>
    <div>
    <h2> Lets get started</h2>

    <div className="expenses">
    <ExpenseItem 
    title = {expenses[0].title} 
    amount= {expenses[0].amount} 
    date= {expenses[0].date}
    ></ExpenseItem>

    <ExpenseItem 
    title = {expenses[1].title} 
    amount= {expenses[1].amount} 
    date= {expenses[1].date}
    ></ExpenseItem>

    <ExpenseItem title = 
    {expenses[2].title} 
    amount= {expenses[2].amount} 
    date= {expenses[2].date}
    ></ExpenseItem>

    <ExpenseItem title = 
    {expenses[3].title} 
    amount= {expenses[3].amount} 
    date= {expenses[3].date}
    ></ExpenseItem>

    </div>
    
    </div>
    
</>

  );


}

export default App;