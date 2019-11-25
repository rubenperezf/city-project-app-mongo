import React from 'react';
import './App.css';
import Form from "./components/Form"
import WriteCountry from './components/WriteCountry'
import {Link} from '@reach/router'


function App() {
  return (
    <div className="App">
      <header><Link className="reload" to="/"onClick="window.location.reload()"><h1>Cities of the World</h1></Link></header>
      <Form path='/'/>
      <WriteCountry />

    </div>
  );
}

export default App;
