import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {

  const [todos, setTodos] = useState([]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addTodo = (work) => {
    let sno = 1
    sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      work: work
    }
    setTodos([...todos, myTodo]);
    console.log(sno, myTodo);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title='TodoApp' />
        <Routes>
          <Route exact path='/' element={<Todos addTodo={addTodo} todos={todos} onDelete={onDelete} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
