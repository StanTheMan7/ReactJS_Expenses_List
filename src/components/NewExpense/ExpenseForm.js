import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseFrom = (props) => {
    // my States   slices good to know that you CAN have multiple states for a single component they will work without affecting the others states , and in all 3 states we just store some user input  
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
// insted of 3 states we can go for one sate insted, by calling used State only onece and by passing in an object as a value and now you can group together your 3 states 
    // const [userInput , setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate: '' 
    // })




    const titleChangeHandler = (event) =>{
        // now we have to think how to get the value that we type in our input
        setEnteredTitle(event.target.value);

        // setUserInput({
            // ... is a default JavaScript Operator in modern js and you copy in the input, this neon just takes an object pulls out all the key value pairs  ,and adds them to this new object
            // ...userInput,
            // enteredTitle: event.target.value, 
            // enteredAmount: '',
            // enteredDate: ''
        // })
        //  if your state depends n the previous state use this function form 
        // setUserInput((prevState) => {
        //     return {...prevState,  enteredTitle: event.target.value}
        // });
    }
    


    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);

        // setUserInput({
            // ... is a default JavaScript Operator in modern js and you copy in the input, this neon just takes an object pulls out all the key value pairs  ,and adds them to this new object
        //     ...userInput,
        // enteredAmount : event.target.value, 
        //     enteredAmount: '',
        //     enteredDate: ''
        // })

    }



    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
            // ... is a default JavaScript Operator in modern js and you copy in the input, this neon just takes an object pulls out all the key value pairs  ,and adds them to this new object
        //     ...userInput,
        //     enteredDate: event.target.value, 
        //     enteredAmount: '',
        //     enteredDate: ''
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        // gathering the user inputs 
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        // and changing the vvalue 
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
return (

<form onSubmit={submitHandler}>
    <div className="new-expense__controls">-
        <div className="new-expense__control">
            <label>Title </label>
            {/* i learned also that i can add listeners on a element where i want to add listener for example on this input bellow by adding a prop that starts with 'on' and then on witch event you wanna listen */}
            {/* Now we could listen to onInput  and therefore react to basically every keystroke, but there is also the just onChange event witch basically does the same , it wil also trigger on every keystroke, but the advantage pf the onChange event is that we can use the same event for all inputs types for example all the four Dropdowns*/}
            <input type="text " value={enteredTitle} onChange={titleChangeHandler}/>
        </div>


        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01"  step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>


            {/* we put a min and max date cause later we also want to add a filter where we only provide the years 2019 to 2022 for filtering   */}
            
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
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