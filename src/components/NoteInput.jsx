import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      sisaKarakter: 50,
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler = (event) => {
    const title = event.target.value;
    const sisaKarakter = 50 - title.length;

    this.setState(() => {
      if (sisaKarakter < 0) {
        return;
      } else {
        return {
          title: title,
          sisaKarakter: sisaKarakter < 0 ? 0 : sisaKarakter,
        };
      }
    });
  };

  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <div className="note-input__header">
          <h5>Buat Catatan</h5>
          <p>
            Sisa Karakter: <strong>{this.state.sisaKarakter}</strong>
          </p>
        </div>
        <input
          type="text"
          className="note-input__judul"
          placeholder="Judul Catatan"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <textarea
          name="isi"
          rows="4"
          cols="50"
          className="note-input__isi"
          placeholder="Tuliskan isi catatan"
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button type="submit">
          <p>Buat Catatan</p>
        </button>
      </form>
    );
  }
}

export default NoteInput;
