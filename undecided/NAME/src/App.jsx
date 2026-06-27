import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";
function App() {


  return (
    <div className="wrapper">

      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App
