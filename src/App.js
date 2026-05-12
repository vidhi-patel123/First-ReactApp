import { use, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light"); // dark mode is enabld or not
  
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      // document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      // document.body.style.backgroundColor = "white";
    }
  }
  
  return (
    <>  
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Navbar title="TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter text to analyze" />
      </div>
      <About/>
    </>
  );
}

export default App;
