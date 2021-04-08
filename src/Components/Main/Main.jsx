import "./Main.css";
import React, { useState } from "react";
import ToDoList from "../ToDoList/ToDoList";
import { TextField } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Main() {
  const [item, setItem] = useState([]);
  const [note, setNote] = useState("");

  const onChangeHandler = (e) => {
    setNote(e.target.value);
  };

  const onClickhandler = (e) => {
    e.preventDefault();
    item.unshift({
      id: item.length,
      name: note,
      done: false,
    });
  };

  const onDeletHandler = (id) => {
    setItem((olddata) => {
      return olddata.filter((olddata, index) => {
        return index !== id;
      });
    });
  };

  const checkHandler = (itemIndex) => {
    var todo = item[itemIndex];
    item.splice(itemIndex, 1);
    todo.done = !todo.done;
    console.log(todo);
    todo.done ? item.push(todo) : item.unshift(todo);
    console.log(item);
    setItem([...item]);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="text">TODO</div>
        <form onSubmit={onClickhandler} className="inputBox">
          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="primary"
            placeholder="Add New Task"
            onChange={onChangeHandler}
            value={note}
            required
          />
          <Fab type="submit" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </form>

        <ToDoList
          data={item}
          onDeletHandler={onDeletHandler}
          checkHandler={checkHandler}
        />
      </div>
    </div>
  );
}

export default Main;
