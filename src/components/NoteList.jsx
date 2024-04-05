import React from "react";
import NoteItem from "./noteItem/NoteItem";

function NoteList({ notes, onDelete, onArchive}) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem 
        {...note} 
        key={note.id} 
        id={note.id}
        onDelete={onDelete} 
        onArchive={onArchive}
        isArchive={note.archived}
        />
      ))}
    </div>
  );
}

export default NoteList;
