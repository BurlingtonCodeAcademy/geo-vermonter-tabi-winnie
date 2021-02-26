import { useState } from 'react'

function Modal(props){


    const [chosen, setChosen] = useState(null)
    const [selected, setSelected] = useState('')
    
    
    function submitForm(evt) {
      evt.preventDefault()
      setChosen(selected)
    }
    
    function handleChange(evt) {
      let target = evt.target
      setSelected(target.value)
    }


    return <div style = {{height: '200px', width: '200px', border: '1px solid black', backgroundColor:"teal"}}>
        What County are we in?
        <ul></ul>
        <div>
       <h4>{chosen ? `You guessed ${chosen}` : 'Guess a County'}</h4>
       <form onSubmit= {submitForm}>
        <select name='fruit-selection' value={selected} onChange={handleChange}>
          <option value="addison">Addison</option>
          <option value="bennington">Bennington</option>
          <option value="caledonia">Caledonia</option>
          <option value="chittenden">Chittenden</option>
          <option value="essex">Essex</option>
          <option value="franklin">Franklin</option>
          <option value="grand-isle">Grand Isle</option>
          <option value="lamoille">Lamoille</option>
          <option value="orange">Orange</option>
          <option value="orleans">Orleans</option>
          <option value="rutland">Rutland</option>
          <option value="washington">Washington</option>
          <option value="windham">Windham</option>
          <option value="windsor">Windsor</option>
        </select>
        <input type='submit' />
       </form>
     </div>
        <button onClick={(evt) => {props.display(false)}}>Cancel</button>
    </div>
}



export default Modal;