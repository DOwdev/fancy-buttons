import { useState } from "react";

export default function CounterButton(){
    const [clickAmount, setClickAmount] = useState(0);
    const clickCounter = () => setClickAmount(clickAmount + 1);
    
    return(
        <button onClick={clickCounter} className="CounterButton">
        You clicked me {clickAmount} amount of times
    </button>
    );
}