import React, { useState } from 'react';

const Note = (props) => {

  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);

  const [editable, setEditable] = useState(false)

  // handler para el save
  const handleSave = () => {
    console.log(props.id);
    props.updateNote(props.id, title, text);
    setEditable(false);
  };

  // CSS override de bootstrap
  const inputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 1.25+'rem',
    marginBottom: 0.75+'rem'
  };
  const textareaStyle = {
    backgroundColor: 'transparent',
    border: 'none'
  };

  // render JSX
  return (
    <div className="card">
      <div className="card-body">

        <input
          style={inputStyle}
          value={title}
          spellCheck={false}
          disabled={!editable}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          spellCheck={false}
          rows={5}
          style={textareaStyle}
          value={text}
          disabled={!editable}
          onChange={(e) => setText(e.target.value)}
        >
        </textarea>

        <br />

        <button
          className="btn"
          hidden={editable}
          onClick={() => setEditable(true)}
        >
          <i className="text-secondary fa fa-pencil fa-lg"></i>
        </button>

        <button
          className="btn"
          hidden={!editable}
          onClick={() => handleSave()}
        >
          <i className="text-secondary fa fa-save fa-lg"></i>
        </button>

        <button className="btn" onClick={() => props.removeNote(props.id)} >
          <i className="text-danger fa fa-trash fa-lg"></i>
        </button>

      </div>
    </div>
  );
};

export default Note;
