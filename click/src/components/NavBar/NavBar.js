import React from "react";
import "./NavBar.css";

const NavBar = (props) => <nav className = "mynav navbar-expand-lg">
<ul className = "navbar-nav d-flex justify-content-around align-self-end">
    <li className = "nav-item">
    <h2>ClickyFruit!</h2>
    </li>
    <li className= "nav-item">
        <span className="watermelon">{props.message}</span>
    </li>
    <li className= "nav-item">
        Score: <span className="watermelon">{props.count}</span> | Top Score: <span className="watermelon">{props.score}</span>
    </li>
</ul>
</nav>;

export default NavBar;