import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseFrom = () => {
    // my States   slices good to know that you CAN have multiple states for a single component they will work without affecting the others elements
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) =>{
        // now we have to think how to get the value that we type in our input
        setEnteredTitle(event.target.value);
    }
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

return (

<form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title </label>
            {/* i learned also that i can add listeners on a element where i want to add listener for example on this input bellow by adding a prop that starts with 'on' and then on witch event you wanna listen */}
            {/* Now we could listen to onInput  and therefore react to basically every keystroke, but there is also the just onChange event witch basically does the same , it wil also trigger on every keystroke, but the advantage pf the onChange event is that we can use the same event for all inputs types for example all the four Dropdowns*/}
            <input type="text " onChange={titleChangeHandler}/>
        </div>


        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01"  step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>


            {/* we put a min and max date cause later we also want to add a filter where we only provide the years 2019 to 2022 for filtering   */}
            
            <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>

        {/* now that we got all our inputs we now also need a button to submit the form*/}
    </div>

    <div className="new-expense__actions "> 
        {/* we will set the type of this button to submit so that when this button is pressed since is inside of this form, this form will be sublitted*/}

        <button type='submit'>Add Expense</button>
    </div>
</form>
)

}

/* -------------------------------------------------------------------------- */
/*                                // Next steps                               */
// todo Now we can use the expense form in the NewExpense component 
/* -------------------------------------------------------------------------- */

export default ExpenseFrom;