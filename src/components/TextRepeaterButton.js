import { useState } from "react";

export default function TextRepeaterButton(){
    const [repetitions, setRepetitions] = useState(1);
    const repetitionCounter = () => setRepetitions(repetitions + 1);

    const textArray = [];
    for (let i = 0; i < repetitions; i++) {
        textArray.push(<span key={i}>I like this text</span>);
      }
    return(
        <button onClick={repetitionCounter} className="TextRepeaterButton">
      {textArray}
  </button>  
    );
}