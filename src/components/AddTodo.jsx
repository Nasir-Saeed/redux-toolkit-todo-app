import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {
    let [inputText, setInputText] = useState("");
    let dispatch = useDispatch()

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputText))
        setInputText("")
        console.log("Form is Submitted")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Task"
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                />
                <button type="submit">Add Task</button>
            </form>

        </>
    );
}

export default AddTodo;
