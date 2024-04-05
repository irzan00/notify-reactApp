import React from "react";
import Navbar from "./Navbar";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/data";

class NotifyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id != id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toLocaleString(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      note.id === id ? { ...note, archived: !note.archived } : note;
    });
    this.setState({ notes });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === false;
    });

    const archivedNotes = this.state.notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <div className="notify-app">
        <Navbar />
        <NoteInput addNote={this.onAddNoteHandler} />
        <div className="notify-app__note-list">
          <h5>Catatan Aktif</h5>
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveHandler}
          />
          <br />
          <h5>Arsip</h5>
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NotifyApp;
