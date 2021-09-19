// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";




function App() {
  const [switchMode,setSwitchMode]= useState('enable dark mode')
  const [mode,setMode] = useState('light')
  const [alert,setAlert]= useState(null)
  
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-secondary')
  }

  const toggleMode =(cls)=>{
    document.body.classList.add('bg-'+cls)
    removeBodyClasses()
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      setSwitchMode('enable light mode')
    showAlert('dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setSwitchMode('enable dark mode')
      showAlert('light mode has been enabled','success')
      // document.title = 'textUtils'
    }

  }
 
  return (
    <>
   <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switchMode={switchMode} />
<Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
          <Route export path="/about">
          <About mode={mode} />
          </Route>
          <Route export  path="/">
    <TextForm showAlert={showAlert} heading ="Try textUtils - Word counter | character counter | remove extra spaces" mode={mode} />
          </Route>
    </Switch>
</div>
</Router>
</>
  );
}


export default App;
