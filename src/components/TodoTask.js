import React from 'react'

const TodoTask = ({ textTask, todoTask, todosTask, setTodosTask }) => {

    const deleteHandlerTask = () => {
        setTodosTask(todosTask.filter((elem) => elem.id !== todoTask.id))
    }

    const completeHandlerTask = () => {
        setTodosTask(todosTask.map((itemTask) => {
            if(itemTask.id === todoTask.id) {
                return {
                    ...itemTask, completed: !itemTask.completed
                }
            }
            return itemTask
        }))
    }
    
  return (
    <div className='todo'>
        <li className={`todoItem ${todoTask.completed ? 'completed' : ''}`}>{textTask}</li>
        <button onClick={completeHandlerTask} className='completeBtn'>
            <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandlerTask} className='trashBtn'>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default TodoTask