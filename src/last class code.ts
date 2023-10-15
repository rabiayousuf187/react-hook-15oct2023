import './App.css';
import React, { createContext } from 'react';
import Navbar from './components/Navbar';

export const UserContext = createContext();

function App() {
  let user = "Iqra";

  return (
    <UserContext.Provider value={user}>
      <Navbar/>
    </UserContext.Provider>
  );
}

export default App;
