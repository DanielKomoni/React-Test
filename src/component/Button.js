import React from "react";

const Button =({title, color, onClick})=>{
    
    return(
      <button onClick={onClick} className="btn" style={{backgroundColor: color}} >{title}</button>
    )
} 
Button.defaultProps={
    color: "black",
    title: "default"
}

export default Button