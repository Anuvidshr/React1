import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [              //array of todo objects
        {
          id:1,
          todo: "Todo msg",
          completed: false,  
        }                  //properties 
    ],
    
    //functionality k naam baki working app.jsx m h

    addTodo: (todo) => {}, //function to add a todo
    updateTodo: (id, todo) => {}, 
    deleteTodo: (id) => {}, 
    toggleComplete: (id) => {}, //function to toggle completion status
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
