import React from "react";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item-body">
      <h4>{title}</h4>
      <p className="created-date">{createdAt}</p>
      <p className="body-text">{body}</p>
    </div>
  );
}

export default NoteItemBody;
