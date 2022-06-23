import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';





function App() {

  // setting state for mode 
  const [mode, setMode] = useState("light")

  // TOGGLE MODE FUNCTON 
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark Mode enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode enabled", "success")

    }

  }

  const [alert, setAlert] = useState(
    null
  );


  // SHOW ALERT FUNCTION 
  const showAlert = (alertMessage, type) => {
    setAlert({
      alertMessage: alertMessage,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)

    }, 800);


  }



  return (
    <>
     {/* //ROUTERS DOESN'T WORK WELL IN GITHUB PAGES SO WE WILL NOT BE USING ROUTERS HERE THATS WHY I REMOVED ABOUT PAGES */}

        <Navbar title="Text -CASE-Convertor"  item2="Contact Us"  mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm textArea="enter the text here" heading="Text Convertor" showAlert={showAlert} />
        
        
       


     

    </>
  );
}
// PROPS :it is the shortcut for propterties 

//components ko hum kuch cheeze dete hai vo props hote hai


export default App;
