import React from "react";
import NoteItemBody from "./NoteItemBody";
import ArchieveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <NoteItemBody
        title={title}
        createdAt={createdAt}
        body={body}
      />
      <div className="note-item__action-button d-flex w-100 justify-content-around">
        <ArchieveButton id={id} onArchive={onArchive} isArchive={isArchive}/>
        <DeleteButton id={id} onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default NoteItem;
