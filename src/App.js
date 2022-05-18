import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  
  const [darkMode, setDarkMode] = useState(true);
  

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Navbar
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <Main
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
