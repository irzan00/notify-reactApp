import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__delete w-100 justify-content-center" onClick={() => onDelete(id)}>
      <img src="../public/images/deletebutton.svg" alt="" />
      <p>Hapus</p>
    </button>
  );
}

export default DeleteButton;
