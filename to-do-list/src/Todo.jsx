import React, { useState } from "react";

function Todo() {

    const [tasks, setTask] = useState(["complete react", "portfolio", "project"]);
    const [newTask, setNewTask] = useState("");


    function handleinput(e) {

        setNewTask(e.target.value);
    }

    function addTask(e) {
        if (newTask.trim() !== "") {

            setTask(t => [...t, newTask]);
            setNewTask("");
        }
        else {
            alert("no valid input");
        }
    }

    function removeTask(index) {
        const tasktoremove = tasks.filter((_, i) => i !== index);
        setTask(tasktoremove);
    }
    function moveup(index) {
        if (index > 0) {
            const uptasks = [...tasks];
            [uptasks[index], uptasks[index - 1]] = [uptasks[index - 1], uptasks[index]]
            setTask(uptasks);

            // [a,b] = [b,a] 
        }
    }
    function movedown(index) {
        if (index < tasks.length - 1) {
            const downtasks = [...tasks];
            // [downtasks[index], downtasks[index - 1]] = [downtasks[index - 1], downtasks[index]]
            [downtasks[index], downtasks[index + 1]] = [downtasks[index + 1], downtasks[index]];

            setTask(downtasks);
        }
    }

    return (<>
        <div className="todo">

            <h1>To-Do-List</h1>
            <input type="text"
                placeholder="add task" id="input" value={newTask} onChange={handleinput}></input>
            <button onClick={addTask} className="add-button">Add task</button>
            <ol>
                {tasks.map((task, index) => (<li key={index}>
                    <span className="text"> {task} </span>
                    <button className="delete-button" onClick={() => removeTask(index)}>Delete
                    </button>

                    <button className="up-button" onClick={() => { moveup(index) }}>👆
                    </button>

                    <button className="down-button" onClick={() => movedown(index)}>👇
                    </button>

                </li>))}
            </ol>
        </div>
    </>);
}
export default Todo