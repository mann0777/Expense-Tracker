import React from "react";
import Expenses from "./component/Expenses/Expenses";





function App(){

  const expenses = [

    {id: 'e1', title: 'Car Insurance', amount: 294, date: new Date(2022, 6, 4)},
    {id: 'e2', title: 'GOOgle', amount:5234, date: new Date(2022, 6, 4)},
    {id: 'e3', title: 'facebook', amount: 194, date: new Date(2022, 6, 4)},
    {id: 'e4', title: 'Yahoo', amount: 794, date: new Date(2022, 7, 4)},

  ];


  return(
  
    <div>
    <h2> Lets get started</h2>
    <Expenses items = {expenses} />
    </div>
    

  );


}

export default App;