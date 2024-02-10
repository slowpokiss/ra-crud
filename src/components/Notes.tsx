import { useEffect } from "react";
import "./Notes.css";

interface props {
  onUpdateClick: () => void;
  onDelNoteClick: (id: number) => void;
  notes: { id: number; content: string }[];
}

export default function Notes({ onUpdateClick, onDelNoteClick, notes }: props) {
  useEffect(function () {
    onUpdateClick();
  }, []);

  return (
    <div className="note-area">
      <div className="note-update-area">
        <h1 className="note-title">Notes</h1>
        <div className="note-list-update" onClick={onUpdateClick}></div>
      </div>

      <div className="notes">
        {notes.map((el) => {
          return <div className="note" key={el.id}>
            <div className="note-text">{el.content}</div>
            <div className="note-del" onClick={() => onDelNoteClick(el.id)}>&times;</div>
          </div>;
        })}
      </div>
    </div>
  );
}
