import React, { Component } from 'react';
import Header from './Header';

function App() {
  return (
    <div >
      <Header/>
      {/* <div className="header">
        Phone Directory
      </div>
      <button>Add</button>
      <div>
        <span>Name</span><br />>
        <span>Phone</span>
      </div> */}
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" placeholder="Type here" defaultValue="Saif"/>
    </div>
  );
}

export default App;
