import React from 'react'

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: input, completed: false, id: Math.random() * 1000} ])
        setInput('')
    }

    return (
    <>
        <form>
            <input value={input} onChange={onInputChange} type='text' className='todoInput' />
            <button onClick={onFormSubmit} className='todoBtn' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
        </form>
    </>
    )
}
    
export default Form