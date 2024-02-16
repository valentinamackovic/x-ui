import React from 'react';
import './shared.css';

function App() {
  return (
    <>
      <title className="title">X UI</title>
      <div className="divider"></div>
      <div className='sidebar'>
        <div className='sidebar-content'>
          <p className='sidebar-item sidebar-item-active'>Overview</p>
          <p className='sidebar-item'>Menu</p>
          <p className='sidebar-item'>Select</p>
          <p className='sidebar-item'>Accordion</p>
          <p className='sidebar-item'>Modal</p>
        </div>
      </div>
    </>
  );
}

export default App;
