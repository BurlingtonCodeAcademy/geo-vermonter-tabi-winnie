import React from 'react'

function Buttons(props){

    return (
        <div>
    {/* QUIT */}
            <button disabled={props.disabledState} onClick={() => props.setDisabled(false)}>I Give Up!</button>
    {/* GUESS */}
            <button disabled={props.disabledState} onClick={() => {props.setDisabled(false); props.display(true)}} >Guess</button>
        </div>
    )
}

export default Buttons;
