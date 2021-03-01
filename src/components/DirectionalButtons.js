import React from 'react'

function DirectionalButtons(props) {



// activate score function, movement function, and sets state in app.js that says button was pushed
// still changes marker position but shouldnt...... WHY!?
    return (
        <div>
        <button onClick={()=> {props.subtractor(); props.moveNorth(); props.setDirectional(true)}}>N</button>
        <button onClick={()=> {props.subtractor(); props.moveEast(); props.setDirectional(true)}}>E</button>
        <button onClick={()=> {props.subtractor(); props.moveWest(); props.setDirectional(true)}}>W</button>
        <button onClick={()=> {props.subtractor(); props.moveSouth(); props.setDirectional(true)}}>S</button>
        </div>
    )
}


export default DirectionalButtons