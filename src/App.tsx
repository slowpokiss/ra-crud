import { useRef, FormEvent, useState } from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<{ id: number, content: string }[]>([]);
  const areaRef = useRef(null);

  const getNotes = async () => {
    fetch("http://localhost:7070/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const sendNote = async (note: { id: number; content: string }) => {
    fetch("http://localhost:7070/notes", {
      method: "POST",
      body: JSON.stringify({ id: 0, content: note }),
    }).then((res) => getNotes());
  };

  const onDelNoteClick = (id: number) => {
    console.log(id)
    fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    })
    .then((res) => getNotes());
  }

  const onSubmit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    if (areaRef.current.value === '') {
      return;
    }
    sendNote(areaRef.current.value);
    areaRef.current.value = "";
  };

  return (
    <>
      <Notes onUpdateClick={getNotes} notes={notes} onDelNoteClick={onDelNoteClick} />
      <Form areaRef={areaRef} onSubmit={onSubmit}></Form>
    </>
  );
}

export default App;
