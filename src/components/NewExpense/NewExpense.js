import React from "react";
import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm";

// the goal oth this component is to return a form, fro our inputs,and we want also to provide some styling around that form so first of all i will return a div and then inside that div return a form
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() 
        }
        props.onAddExpense(expenseData)
    }
    return <div className='new-expense'>
    {/* here we will render the ExpenseForm and add it as an HTML element in our NewExpense function body so that the NewExpense Component will render the ExpenseForm  " */}
    <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div> 
};

export default NewExpense

// todo next , import in App.js  NewExpense