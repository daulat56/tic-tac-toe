import React from "react";

const Square =(props)=>{
    return (
        
        <div 
        onClick={props.onClick}
        style={{
         border:"5px solid red ",
         width:"100%", 
         height:"100px",
         display:"flex",
         justifyContent:'center',
         alignItems:'center',
        }} 
         className="square">
           <h3>{props.value}</h3>  
        </div>
    );
};

export default Square;