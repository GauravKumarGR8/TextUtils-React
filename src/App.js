import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light') // To change mode between dark and light

  const [color, setColor] = useState('dark')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setColor('light')
    }
    else{
      setMode('light')
      setColor('dark')
    }
  }
  return (
    <>
    <Navbar title = 'TextUtils' aboutText = 'About Us' mode={mode} toggleMode={toggleMode} modeTitle={color}/>
    {/* <Navbar/> */}
    <div className="container my-3" >
    <TextForm heading='Enter the text to analyze below'/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
