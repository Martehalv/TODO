import "../styles/todo.scss";
export default function Todo({ title, content, setTodos, index }) {
    const handleClick = (e) => {
        console.log(title, index);
        setTodos((prev) => prev.splice(index, 1));
    };

    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleClick}>Ferdig med To do</button>
        </article>
    );
}