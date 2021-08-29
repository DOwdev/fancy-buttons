import { useState } from "react";

export default function AngryButton(){
    const [anger, setAnger] = useState(0);
    const angerClick = () => {
        anger < 1 ? setAnger(anger+0.1) : setAnger(0)
    };
    return(
        <button onClick={angerClick} style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">
        {anger < 1 && <span>Don't click me too much! </span>}
        {anger >1 && <span>Rawr!</span>}
      </button>
    );
}