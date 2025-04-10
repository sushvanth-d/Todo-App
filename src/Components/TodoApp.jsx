import { useState } from "react";
import './TodoList.css';
import { FaTrash } from 'react-icons/fa';

function TodoList(){
    const[Todos, setTodo] = useState([]);

    const [input, setInput] = useState('');

    function HandleAdd(){
        if(input.trim() === '') return;
    

    const newTodo = {
        id: Date.now(),
        task: input
    };

    setTodo([...Todos, newTodo]);
    setInput('');
}
    function HandleDelete(id){
        const upDatedTodos = Todos.filter(todo => todo.id !== id);
        setTodo(upDatedTodos);
    }

    return(
        <div className="todo-container">
            <h1>Todos List</h1>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Task"
            />
            <button onClick={HandleAdd}>Add</button>

            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id} className="todo-item">{todo.task}
                    <FaTrash 
                    className="delete-icon" 
                    onClick={()=>HandleDelete(todo.id)}
                    title='delete'
                    />
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default TodoList