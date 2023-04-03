import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Input from './components/Input';

function App() {
  return (
    <Form>
      <Input name="name" />
      <Input name="email" />
      <Input name="password" />

      <button>Enviar</button>
    </Form>
  );
}

export default App;
