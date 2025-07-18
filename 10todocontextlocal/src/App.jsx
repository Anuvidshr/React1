import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos((prev)=> [ {id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {  //.map use hua loop lgane k liye
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
      //above logic is like :-
      // prev.map((eachval)=>{
      //   if(eachval.id===id){
      //     todo
      //   }else{

      //   }
      // })   
  }

  const deleteTodo=(id) =>{
    setTodos((prev)=>prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log("Toggling complete for:", id);
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? 
    { ...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  //local storage se access krne k liye => useeffect (load data on component mount)
  useEffect(() => { 
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  //local storage me save krne k liye => useeffect (save data on component update)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id}
                  className='w-full'
                  >
                    <TodoItem todo={todo} />
                  </div>
                ))}
            </div>
        </div>
     </div>
    </TodoProvider>
  )
}

export default App
