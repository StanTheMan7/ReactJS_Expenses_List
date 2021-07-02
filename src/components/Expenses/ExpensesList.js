import React from "react";
import "./ExpensesList.css";
import ExpenseItem  from "./ExpenseItem";


const ExpensesList = (props) => {
    if (props.items.length === 0 ) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return <ul className='expenses-list'>
        {/* map() is a built in array methode witch is built in stadard js  */}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
  </ul>
};

export default ExpensesList;
