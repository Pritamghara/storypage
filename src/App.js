// src/App.js

import React from 'react';
import './App.css';
import Story from './components/Story';
import story1 from './stories/story1';




const App = () => {
  return (
    <div className="App">
      <h1>Storybook</h1>
     
      <Story pages={story1} />
    
      
      
    </div>
  );
}

export default App;
