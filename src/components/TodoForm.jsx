import { useState } from "react";
import "../styles/todoForm.scss";
export default function TodoForm({ setTodos }) {
    const [todo, setTodo] = useState([]);
    
    const handleChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value

        setTodo((prev) => ({...prev, [inputName]: inputValue }));

        console.log("state", todo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {
        setTodos((prev) => [...prev, todo ]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="to-do">To do</label>
            <input type="text" id="to-do" onChange={handleChange} name="title"/>
            <label htmlFor="content">Innhold</label>
            <textarea id="content" onChange={handleChange} name="content"></textarea>
            <button onClick={handleClick}>Lag To do</button>
        </form>
    );
}