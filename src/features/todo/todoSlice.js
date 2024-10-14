import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            let { id, newTodo } = action.payload
            let todo = state.todos.find((todoItem) => todoItem.id === id)
            if (todo) {
                todo.text = newTodo
            }
        },
        removeTodo: (state, action) => {
            let id = action.payload
            state.todos = state.todos.filter((todoItems) => todoItems.id !== id)
        }
    }
})

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer