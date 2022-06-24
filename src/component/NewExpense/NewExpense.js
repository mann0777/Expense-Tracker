import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props)=>{
    const saveExpenseDataHadler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.Random().toString()
        };

        props.onAddExpense(expenseData);

    };


    return(
        <div className="new-expense">

        <ExpenseForm onSaveExpenseData = {saveExpenseDataHadler} />
        
        </div>
    );

};

export default NewExpense;