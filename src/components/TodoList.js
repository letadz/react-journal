import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='todoContainer'>
        <ul className='todoList'>
            {todos.map((todo) => ( 
                <Todo 
                    key={todo.id} 
                    setTodos={setTodos} 
                    todos={todos} 
                    todo={todo}
                    text={todo.text} 
                /> 
            ))}
        </ul>
    </div>
  )
}

export default TodoList