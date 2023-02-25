import React, { useState } from "react";
import "./Neumorphism.css";
import audio from "../assets/click.mp3";

function Neumorphism() {
  const [click, SetClick] = useState(false);
  const [text, SetText] = useState("ON");
  let sound = new Audio("../assets/click.mp3");

  const handleClick = () => {
    new Audio(audio).play();
    SetClick(!click);
    SetText((text) => {
      if (text === "OFF") {
        return "ON";
      } else {
        return "OFF";
      }
    });
  };
  return (
    <div className="container">
      <button onClick={handleClick} className={click ? "box" : "box active"}>
        {text}
      </button>
    </div>
  );
}

export default Neumorphism;
