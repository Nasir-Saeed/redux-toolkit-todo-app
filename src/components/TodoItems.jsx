import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function TodoItems() {
    let todos = useSelector((state) => state.todos);
    let dispatch = useDispatch();

    let [isEditingId, setIsEditingId] = useState(null);
    let [isEditingText, setIsEditingText] = useState("");

    let removeTodoItem = (id) => {
        dispatch(removeTodo(id));
    };

    let updateTodoItem = (item) => {
        setIsEditingId(item.id);
        setIsEditingText(item.text);
    };

    let handleUpdate = (e, id) => {
        if (e) {
            e.preventDefault();

        }
        if (isEditingText.trim() !== "") {

            dispatch(updateTodo({ id, newTodo: isEditingText }));
            console.log("Updating todo:", { id, newTodo: isEditingText });

        }
        setIsEditingId(null);
        setIsEditingText("");
    };

    return (
        <>
            {todos &&
                todos.map((item) => (
                    <div key={item.id} className="todoItems">
                        {isEditingId === item.id ? (
                            <>
                                <input
                                    type="text"
                                    onChange={(e) => setIsEditingText(e.target.value)}
                                    value={isEditingText}
                                    onBlur={() => { handleUpdate(null, item.id); }}
                                />
                                <button onClick={(e) => { handleUpdate(e, item.id); }}>Update </button>
                            </>
                        ) : (
                            <>
                                <p>{item.text}</p>
                                <button onClick={() => updateTodoItem(item)}>Edit</button>
                                <button onClick={() => removeTodoItem(item.id)}>Remove</button>
                            </>
                        )}
                    </div>
                ))}
        </>
    );
}

export default TodoItems;
