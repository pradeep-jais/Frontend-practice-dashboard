import { use, useEffect, useRef, useState } from 'react';
import './refExample.css';

const RefExample = () => {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const prevCountRef = useRef(null);

    // Storing mutable value using useRef
    const mutableFlagRef = useRef({ name: 'pradeep', boolean: true, userLogged: false, count: 100, result: 'success', });



    useEffect(() => {
        // Accessing DOM element using useRef: useCase -- uncontrolled form input focus
        inputRef.current.focus();
        console.log('Accessing DOM element using useRef: useCase -- uncontrolled form input focus', inputRef);

        console.log('mutableFlagRef initial:', mutableFlagRef);


        // changing mutable value -- no re-render
        mutableFlagRef.current.userLogged = true;
        mutableFlagRef.current.count = 200;
        console.log('flag after mutated', mutableFlagRef);

    }, [])

    // Storing previous value using useRef
    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted! Your input:', inputRef.current.value);

    }

    return (
        <section className='section ref-example'>
            <h2 className='section-title'>Ref use case </h2>
            <div className="flex-container">
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="form-control">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" id="name" placeholder='your name' ref={inputRef} />
                    </div>
                    <button type="submit" className='btn'>Submit</button>
                </form>
                <div className="counter-container">
                    <h3>Count : {count}</h3>
                    <h3>Previous Count: {prevCountRef.current}</h3>
                    <button className='btn' onClick={() => setCount(count + 1)}>Increase Count</button>
                </div>
            </div>
            <div className="quick-notes-container">
                <h3>📝Quick Ref Notes:</h3>
                <ul>
                    <li>useRef vs State: useState → causes re-render but useRef → does NOT cause re-render</li>
                    <li>useRef is a box that survives renders, but React doesn’t watch it.</li>
                    <li>It can stores:</li>
                    <ul>
                        <li>Previous value -- used when you need to compare past vs current</li>
                        <li>Timers/Intervals Id -- prevent re-creating timers and clean them reliably</li>
                        <li>Mutable flags -- used for canceling async work or avoiding state updates after unmount</li>
                        <li>Selection DOM node and performing various operations on them like input focus, scroll or measuring DOM</li>
                    </ul>
                    <li>When not to use it:</li>
                    <ul>
                        <li>❌ If UI depends on it
                        </li>
                        <li>❌ If change should trigger re-render
                        </li>
                        <li>❌ As a replacement for state</li>
                    </ul>
                    <li>useRef stores mutable data across renders without affecting UI.</li>
                    <li>useRef is used for persisting values like DOM references, previous values, or timers without triggering re-renders.</li>
                </ul>

            </div>
        </section>
    )
}
export default RefExample