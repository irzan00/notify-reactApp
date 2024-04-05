import React from "react";
import NoteItemBody from "./NoteItemBody";
import ArchieveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item">
      <NoteItemBody
        title={title}
        createdAt={createdAt}
        body={body}
      />
      <div className="note-item__action-button">
        <ArchieveButton id={id} onArchive={onArchive} isArchive={isArchive}/>
        <DeleteButton id={id} onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default NoteItem;
