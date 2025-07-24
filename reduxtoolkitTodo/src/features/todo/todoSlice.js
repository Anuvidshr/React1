//reducers step 2
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  //iske andar properties and fns aate h 
        addTodo: (state, action) => {     //syntax: addTodo: (state, action) => {}
            const todo = {
                id: nanoid(), 
                text: action.payload  //action.payload se jo value milegi wo text me set hogi 
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer