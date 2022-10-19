import React from "react";
import Button from "./Button";

const Header =({title, onAdd})=>{
   
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button title={"Add"} color={"green"} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps={
    title: "no text"
}

export default Header