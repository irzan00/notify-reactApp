import React from "react";
import NoteItem from "./noteItem/NoteItem";

function NoteList({ notes, onDelete, onArchive}) {
  return (
    <div className="note-list justify-content-center">
      {(notes.length) ? 
        (
          notes.map((note) => (
            <NoteItem 
            key={note.id} 
            id={note.id}
            onDelete={onDelete} 
            onArchive={onArchive}
            isArchive={note.archived}
            {...note} 
            />
          ))
        )
        :
        <p>Catatan Tidak Tersedia</p>
      }
    </div>
  );
}

export default NoteList;
