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
      search: "",
    };
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchTitleHandler = this.onSearchTitleHandler.bind(this);
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
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const updateNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: updateNotes });
  }

  onSearchTitleHandler(title) {
    this.setState(() => {
      return {
        search: title,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLocaleLowerCase())
    );

    const activeNotes = notes.filter((note) => {
      return note.archived === false;
    });

    const archivedNotes = notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <div className="notify-app container-fluid">
        <Navbar onSearch={this.onSearchTitleHandler} />
        <div className="container">
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
      </div>
    );
  }
}

export default NotifyApp;
