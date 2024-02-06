import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import todolist from './components/todolist';

const App=()=> {
  const [input,setInput] = useState("")
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
    <div classsName='app-wrapper'>
      <div>
        <Header/>
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <todolist 
        todos={todos} 
        setTodos={setTodos} 
        setEditTodo={setEditTodo}
        />
      </div>
    </div>

    </div>
  );
}

export default App;