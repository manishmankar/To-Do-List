import "./Main.css";
import React, { useState } from "react";
import ToDoList from "../ToDoList/ToDoList";

function Main() {
  const [iteam, setIteam] = useState([]);
  const [note, setNote] = useState("");

  const [checked, setChecked] = useState(false);

  const onchange = (e) => {
    setNote(e.target.value);
    // setNote(e.target.value);
    console.log(note);
  };

  const onclick = (e) => {
    // setIteam((olddata) => {
    //   return [...olddata, note];
    // });
    // console.log(iteam);

    // setNote("");

    setIteam([
      ...iteam,
      {
        id: iteam.length,
        name: note,
        done: false,
      },
    ]);
    setNote("");
    console.log(iteam);
  };

  const ondelethandler = (id) => {
    console.log(id);
    setIteam((olddata) => {
      return olddata.filter((olddata, index) => {
        return index !== id;
      });
    });
  };

  const handleChange = (itemIndex) => {
    console.log(itemIndex.id);

    var todo = iteam[itemIndex.id];

    iteam.splice(itemIndex.id, 1);

    todo.done = !todo.done;
    todo.done ? iteam.push(todo) : iteam.unshift(todo);

    setIteam(iteam);
    console.log(iteam);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="iteams">
          <input
            type="text"
            onChange={onchange}
            value={note}
            name="contain"
          ></input>
          <button onClick={onclick}>+</button>
        </div>
        {/* {iteam.map((data, index) => {
          return (
            <ToDoList
              text={data}
              key={index}
              id={index}
              onselect={ondelethandler}
              handleChange={handleChange}
            />
          );
        })} */}
        <ToDoList
          data={iteam}
          onselect={ondelethandler}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Main;
