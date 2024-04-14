import React from 'react';
import UseLocalStorage from "./hooks/UseLocalStorage";
import UseToggle from "./hooks/UseToogle";
import UseEventListener from './hooks/UseEventListener';

function App() {

  return (
    <>
    <UseLocalStorage/>
    <UseToggle/>
    <UseEventListener/>
    </>
  );
}

export default App;

