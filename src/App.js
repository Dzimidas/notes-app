import "./App.css";
import { useState, useEffect } from "react";
import Notepad from "./components/Notepad";
import Status from "./components/Status";
import Save from "./components/Save";

function App() {
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  function handleNoteChange(e) {
    setNotes(e.target.value);
    setStatus("unsaved");
  }

  function handleSave() {
    setStatus("saved");
  }

  useEffect(() => {
    const data = localStorage.getItem("my-notes");
    if (data) {
      setNotes(JSON.parse(data));
      setStatus("saved");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="saveAndStatus">
          <Save notes={notes} handleSave={handleSave} />
          <Status status={status} />
        </div>
        <Notepad id="textArea" notes={notes} handleNoteChange={handleNoteChange} />
      </header>
    </div>
  );
}

export default App;
