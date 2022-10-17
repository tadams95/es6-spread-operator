import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  //items from user input
const [items, setItems] = useState("");
const [list, setList] = useState([]);

function handleChange(event) {
  const addedItem = event.target.value;

  setItems(addedItem);
}

function addItem() {
  setList( (prevItems) => {
    return [...prevItems, items]
  })
  setItems("");
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value = {items} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
       {   list.map((todoItem) => {
            return <li>{todoItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
