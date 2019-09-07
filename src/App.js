import React, {useState, useEffect} from 'react';
import Popup from './Popup'
import './App.css';

const App = () => {
  const [feedbackType, setFeedbackType] = useState('')

  const showPopup = (data) => {
    setFeedbackType(data)
  }

  return (
    <div className="App">
      <header>
        <img src={require("./assets/imgs/logo.png")} alt=""/>
        <p>Feedback-ul dvs. este important pentru noi</p>
      </header>
      <div className="layout-grid">
        <button className="btn-primary" onClick={() => showPopup('hartie')}><i className="fas fa-toilet-paper"></i>Hartie igienica</button>
        <button className="btn-primary" onClick={() => showPopup('sapun')}><i className="fas fa-hand-holding"></i>Sapun</button>
        <button className="btn-primary" onClick={() => showPopup('cos-gunoi')}><i className="fas fa-trash"></i>Cos de Gunoi</button>
        <button className="btn-primary" onClick={() => showPopup('wc-murdar')}><i className="fas fa-toilet"></i>WC Murdar</button>
      </div>
      {feedbackType && <Popup feedback={feedbackType} />}
    </div>
  )
}



export default App;
