import React from 'react'
import TodoTask from './TodoTask'

const TodoListTask = ({ todosTask, setTodosTask }) => {
  return (
    <div className='todoContainer'>
        <ul className='todoList'>
            {todosTask.map((todoTask) => ( 
                <TodoTask 
                    key={todoTask.id} 
                    setTodosTask={setTodosTask} 
                    todosTask={todosTask} 
                    todoTask={todoTask}
                    textTask={todoTask.text} 
                /> 
            ))}
        </ul>
    </div>
  )
}

export default TodoListTask