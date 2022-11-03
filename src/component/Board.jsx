import React ,{useState} from "react";
import Square from "./Square"

const Board=()=>{
    const [state,setState]=useState(Array(9).fill(null)); //as we have 9 empty boxes so need array of size 9
    const [isXTurn,setIsXTurn]=useState(true);

    // function to check who is winner

    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic)
        {
            const[a,b,c]=logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
            {
                return state[a];
            }
        }
        return false;
    }
    
    const isWinner=checkWinner();

    const handleClick=(index)=>{
       //to remove the the repeatation of insertion at the same index

       if(state[index]!==null)
       {
        return;
       }
        
         //make a copy of existing index
         const copyState={...state};  //copy of index
         copyState[index]=isXTurn? "X":"0";//index which is clicked is either 0 or x depending upon turn of x
         setState(copyState);
         setIsXTurn(!isXTurn); //after entering x need to turn to 0 means make x tern false

    };
    const handleReset=()=>{
        setState(Array(9).fill(null));
    };
    return (
        <div className="board-container">
            {isWinner? (<><h1>{isWinner} won the game  <button onClick={handleReset}>play again</button></h1></>):
            (
            <>
            <h3>Player {isXTurn?"X":"0"} its your turn</h3>
            <div className="board-row">
            <Square onClick={()=>handleClick(0)} value={state[0]} />
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            
            <div className="board-row">
            <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            
            <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
            </>
             )
}
            
        </div>
    );
}

export default Board;