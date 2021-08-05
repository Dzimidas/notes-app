function Save({ notes, handleSave }) {
  function saveStuff(){
    handleSave();
    localStorage.setItem("my-notes", notes);
  }
  return <button onClick={saveStuff}>Save</button>;
}

export default Save;
