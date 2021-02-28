import React from 'react'
// import { useState } from 'react'

function DirectionalButtons(props) {

// const [score, setScore] = useState(100);


    return (
        <div>
        <button onClick={props.subtractor}>N</button>
        <button onClick={props.subtractor}>E</button>
        <button onClick={props.subtractor}>W</button>
        <button onClick={props.subtractor}>S</button>
        </div>
    )
}


export default DirectionalButtons