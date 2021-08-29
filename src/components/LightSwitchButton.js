import { useState } from "react";

export default function LightSwitchButton(props){
    const {light, switchLight} = props;

    return(
      <button onClick={switchLight} className="LightSwitchButton">
        {light === "on" && <span><i>💡</i> I'm on!</span>}
        {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
      </button>
    );
}