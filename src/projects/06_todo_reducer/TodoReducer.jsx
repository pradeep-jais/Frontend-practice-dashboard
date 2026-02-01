import { useReducer } from "react";
import "./styles.css";
import reducer from "./utils/todoReducer";
import { defaultFruits } from "./data";

const initialState = {
    fruits: defaultFruits,
    inputValue: '',
}

export default function TodoReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { fruits, inputValue } = state;
    // console.log(state);

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
                        value={inputValue}
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
