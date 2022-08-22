import React, { useState } from 'react'
import Form from './components/Form'
import FormTask from './components/FormTask'
import TodoList from './components/TodoList'
import TodoListTask from './components/TodoListTask'
import './App.css'

const App = () => {
  
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const [inputTask, setInputTask] = useState('')
  const [todosTask, setTodosTask] = useState([])

  return (
    <div className='container'>
      <div className='thoughtsContainer'>
        <header>Thoughts for the Day</header>
        <Form
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos = {setTodos}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>


      <div className='taskContainer'>
        <header>Task</header>
        <FormTask
          inputTask = {inputTask}
          setInputTask = {setInputTask}
          todosTask = {todosTask}
          setTodosTask = {setTodosTask}
        />
        <TodoListTask setTodosTask={setTodosTask} todosTask={todosTask} />
      </div>
    </div>
  )
}

export default App