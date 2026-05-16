import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage.jsx'
import Navbar from './components/Navbar.jsx'
function App() {


  return (
    <div className="wrapper">

      <Navbar></Navbar>
      <Homepage />
    </div>
  );
}

export default App
