import Todo from "./Todo";

export default function Todos({ startTodos, setTodos }) {
    return(
        <section>
            <h2>To do's</h2>
            {startTodos.map((todo, index) => ( 
                <Todo 
                title={todo.title} 
                content={todo.content} 
                key={index} 
                setTodos={setTodos} 
                inedx={index}/>
                ))}
        </section>
    );
}