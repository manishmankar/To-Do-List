import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./ToDoList.css";

function ToDoList(props) {
  return (
    <div>
      {props.data.map((data, index) => {
        return (
          <div key={index} index={index} className="ToDo">
            <div>
              <div>
                <Checkbox
                  onChange={() => {
                    props.handleChange(data);
                  }}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
              <ul>
                <li className="style_inline">{data.name}</li>
              </ul>
            </div>
            <div>
              <button
                className="button"
                onClick={() => {
                  props.onselect(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
