import React from 'react'

const FormTask = ({inputTask, setInputTask, todosTask, setTodosTask}) => {
    const onInputChangeTask = (e) => {
        console.log(e.target.value)
        setInputTask(e.target.value)
    }

    const onFormSubmitTask = (e) => {
        e.preventDefault();
        setTodosTask([...todosTask, {text: inputTask, completed: false, id: Math.random() * 1000} ])
        setInputTask('')
    }

    return (
    <>
        <form>
            <input value={inputTask} onChange={onInputChangeTask} type='text' className='todoInput' />
            <button onClick={onFormSubmitTask} className='todoBtn' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
        </form>
    </>
    )
}
    
export default FormTask