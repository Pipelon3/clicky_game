import React from "react";
import "./style.css";

function Title(props) {
  return <div>
     <div>
     <br></br>
     <h1 className="title">{props.children}</h1>
     <nav class="navbar">
         <ul>
             <li>Gotta Click-Em all!</li>
             <li>Score: {props.score} | High Score:{props.highscore}  </li>
         </ul>
     </nav>
     </div>
     </div>;
}

export default Title;