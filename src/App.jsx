import React, { useState } from "react";
import ToDoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoList
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
