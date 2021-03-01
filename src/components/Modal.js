import { useState } from "react";

function Modal(props) {
  const [chosen, setChosen] = useState(null); // what is chosen state
  const [selected, setSelected] = useState(""); // what is selected state

  // when submitted... update chosen state with currently selected
  function submitForm(evt) {
    evt.preventDefault();
    setChosen(selected);
  }

  // when option is selected save it in selected state
  function handleChange(evt) {
    let target = evt.target;
    setSelected(target.value);
  }

//  when win set win to true and win message posted
  function win(){
    props.setWin(true)
    return 'You Won!' 
  }

//   not perfect but works for now
  function wrong(){
    'Sorry, thats wrong'
    props.setScore(props.score - 10);
    props.display(false)
   window.alert('You guessed wrong... minus 10 points ') // currently shows twice.. not sure why
  }

  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        border: "1px solid black",
        backgroundColor: "teal",
        position: "absolute",
        zIndex: 600,
      }}
    >
      What County are we in?
      <ul></ul>
      <div>
        <h4>{chosen ? `You guessed ${chosen}` : "Guess a County"}</h4> {/* update header with selected county */}
        {chosen && <h4>{props.fetched.county === chosen ? win() : wrong()}</h4>}
        <form onSubmit={submitForm}> 
          <select
            name="county-selection"
            value={selected}
            onChange={handleChange}
          >
            <option value="Addison County">Addison</option>
            <option value="Bennington County">Bennington</option>
            <option value="Caledonia County">Caledonia</option>
            <option value="Chittenden County">Chittenden</option>
            <option value="Essex County">Essex</option>
            <option value="Franklin County">Franklin</option>
            <option value="Grand-isle County">Grand Isle</option>
            <option value="Lamoille County">Lamoille</option>
            <option value="Orange County">Orange</option>
            <option value="Orleans County">Orleans</option>
            <option value="Rutland County">Rutland</option>
            <option value="Washington County">Washington</option>
            <option value="Windham County">Windham</option>
            <option value="Windsor County">Windsor</option>
          </select>
          <input type="submit" />
        </form>
      </div>
      <button
        onClick={(evt) => {
          props.display(false); // Cancel button
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default Modal;
