import { useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(0)

    function handleIncrease() {
        setNumber(number + 1)
    }

    function handleDecrease() {
        setNumber(number - 1)
    }
  
    return (
        <>
            <p className="title">Counter</p>
            <button className="btn-counter font-Inter" onClick={handleDecrease}>Decrease</button>
            <p className="counter languages-items">{number}</p>
            <button className="btn-counter font-Inter" onClick={handleIncrease}>Increase</button>
        </>
    )    
}