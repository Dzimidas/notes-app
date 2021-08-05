function Notepad({ handleNoteChange, notes }) {
  return(
    <textarea value={notes} onChange={handleNoteChange} placeholder="Type some notes here or whatever."></textarea>
  );
}

export default Notepad;