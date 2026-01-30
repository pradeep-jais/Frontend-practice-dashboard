import { useState } from "react";
import "./styles.css";

function generateId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

const defaultFruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"].map((name) => ({
    id: generateId(),
    name,
}));

export default function TodoReducer() {
    const [fruits /*, setFruits */] = useState(defaultFruits);



    return (
        <section className="todo-reducer">
            <h2 className="section-title">Todo Reducer Example</h2>
            <div className="card">
                <h3 className="title">Fruit List</h3>

                <form className="add-form" onSubmit={(e) => e.preventDefault()}>
                    <input className="input" placeholder="Add a fruit..." aria-label="Add fruit" />
                    <button type="button" className="btn primary">Add</button>
                </form>

                <ul className="fruit-list">
                    {fruits.map((fruit) => (
                        <li className="fruit-item" key={fruit.id}>
                            <span className="fruit-name">{fruit.name}</span>
                            <button type="button" className="btn small">Remove</button>
                        </li>
                    ))}
                </ul>

                <div className="actions">
                    <button type="button" className="btn">Clear</button>
                    <button type="button" className="btn outline">Reset</button>
                </div>
            </div>
        </section>
    );
}
