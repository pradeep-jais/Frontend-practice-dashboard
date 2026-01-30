import { useState, useReducer } from "react";
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

const initialState = {
    fruits: defaultFruits,
    inputValue: '',
}

const reducer = (state, action) => {
    if (action.type === 'CHANGE_INPUT') {
        return {
            ...state, inputValue: action.payload.input
        }
    }
    if (action.type === 'ADD_FRUIT') {
        const value = state.inputValue.trim();
        if (!value) return state;
        return {
            ...state,
            fruits: [...state.fruits, { id: generateId(), name: value }],
            inputValue: '',
        }
    }
    return state;
}

export default function TodoReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { fruits } = state;

    console.log(state);


    const handleInputChange = (e) => {
        dispatch({ type: 'CHANGE_INPUT', payload: { input: e.target.value } });
    }

    const addFruit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_FRUIT' })
    }

    return (
        <section className="todo-reducer">
            <h2 className="section-title">Todo Reducer Example</h2>
            <div className="card">
                <h3 className="title">Fruit List</h3>

                <form className="add-form" onSubmit={(e) => addFruit(e)}>
                    <input className="input" placeholder="Add a fruit..." aria-label="Add fruit"
                        value={state.inputValue}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <button type="submit" className="btn primary">Add</button>
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
