function Notepad({ handleNoteChange, notes }) {
  function changeState(e){
    handleNoteChange(e)
  }
  return(
    <textarea handleNoteChange={changeState} placeholder="Type some notes here or whatever."></textarea>
  );
}

export default Notepad;