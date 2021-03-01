import React from 'react'

function Buttons(props){

    // quit and guess buttons, disabled based on state in app.js 
    

    return (
        <div>
    {/* QUIT */}
            <button disabled={props.disabledState} onClick={() => {props.setDisabled(false); props.giveUp(true)}}>I Give Up!</button> {/*when clicked update status bar with location*?}
    {/* GUESS */}
            <button disabled={props.disabledState} onClick={() => {props.setDisabled(false); props.display(true)}} >Guess</button> {/*Activates guess modal*/}
        </div>
    )
}

export default Buttons;
