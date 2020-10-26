import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import NoteForm from './NoteForm';
import NotesList from './NotesList';
import axios from 'axios';

const App = () => {

  // estado
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    axios.get('/api/notes')
      .then(res => {
        console.log(res.data.notes);
        const notasNuevas = [...notas, ...res.data.notes]
        setNotas(notasNuevas);
      });
  }, []);

  const updateNote = (id, title, text) => {
    console.log(id, title, text);
    const notaActualizada = {
      title: title,
      text: text
    };
    axios.put('/api/notes/' + id, notaActualizada)
      .then(res => {
        console.log(res.data);
        const notasActualizadas = notas.map(nota =>
          nota.id === id ? notaActualizada : nota
        );
        setNotas(notasActualizadas);
      });
  };

  const addNote = note => {
    axios.post('/api/notes', note)
      .then(res => {
        const nuevasNotas = [res.data, ...notas];
        setNotas(nuevasNotas)
      });
  };

  const removeNote = (id) => {
    axios.delete('/api/notes/' + id)
      .then(res => {
        const nuevoArrayDeNotas = notas.filter(note => note._id !== id);
        setNotas(nuevoArrayDeNotas);
      });
  };



  // render JSX
  return (
    <div>
      <Header title="Notas con React" />
      <div className="container mt-3">
        <NoteForm addNote={addNote} />
        <hr />
        <NotesList notas={notas} updateNote={updateNote} removeNote={removeNote} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
