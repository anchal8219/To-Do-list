import React, { useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const updateTodo = (title, id, completed, created_at) => {
        const newTodo = todos.map((todo)=>
        todo.id === id ? {title, id, completed, created_at} : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("")
        }
    }, [setInput, editTodo])
    const onInputChange = (event)=>{
        setInput(event.target.value);
    }

    const onFormSubmit = (event)=>{
        event.preventDefault();
        const currentDate = new Date().toLocaleString();
        if(!editTodo){
            setTodos([...todos, {id:uuidv4(),title: input, completed: false, created_at: currentDate }])
            setInput("")
        }else{
            updateTodo(input, editTodo.id, editTodo.completed, editTodo.created_at )
        }
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" 
            placeholder='Enter a Todo...' 
            className='task-input' 
            value={input}
            required
            onChange={onInputChange}
        />
        <button className='button-add' type='submit'>
            {editTodo ? "OK" : "Add"}
        </button>
    </form>
    
  )
}

export default Form
