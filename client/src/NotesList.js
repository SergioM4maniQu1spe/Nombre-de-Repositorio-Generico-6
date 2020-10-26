import React from 'react';
import Note from './Note';


const NotesList = (props) => {



  // render JSX
  return (
    <div className="card-columns">
      {props.notas.map(nota => (
        <Note
          id={nota._id}
          key={nota._id}
          title={nota.title}
          text={nota.text}
          removeNote={props.removeNote}
          updateNote={props.updateNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
