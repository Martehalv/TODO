import "../styles/todoForm.scss";
export default function TodoForm() {
    return (
        <form>
            <label htmlFor="to-do">To do</label>
            <input type="text" id="to-do"/>
            <label htmlFor="content">Innhold</label>
            <textarea id="content"></textarea>
            <button>Lag To do</button>
        </form>
    );
}