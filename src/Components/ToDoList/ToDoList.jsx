import React from "react";

import "./ToDoList.css";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

function ToDoList(props) {
  return (
    <div>
      {props.data.map((data, index) => {
        const checkValue = data.done;
        return (
          <div key={index} className="ToDo">
            <div className="todoItem">
              <div
                className={checkValue ? "falseBox" : "trueBox"}
                onClick={() => {
                  props.checkHandler(index);
                }}
              ></div>
              <div className="todoText">{data.name}</div>
            </div>

            <div>
              <IconButton
                aria-label="delete"
                className="button"
                onClick={() => {
                  props.onDeletHandler(index);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
