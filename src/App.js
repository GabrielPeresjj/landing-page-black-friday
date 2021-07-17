import React, { useState } from 'react'
import './App.css'
import Logotipo from './images/logotipo.png'
import BlackFriday from './images/Black-Friday.png'
import Camiseta from './images/Camiseta.jpg'
import Camisa from './images/Camisa.jpg'
import Calça from './images/calça.jpg'

function App() {
  const [email, setEmail] = useState('')

  function saveLocalStorage(){
    localStorage.setItem('E-Mail', email)
  }

  return (
    <div className="container">
      <div className="main-content">
        <img src={Logotipo} className="logotipo" alt="Logotipo"></img>
        <h3 className="inform">Informe seu E-mail para receber ofertas imperdíveis</h3>
        <div className="form">
          <div><span className="span">*</span><strong>E-mail</strong></div>
          <input className="input" placeholder="Digite seu E-mail" value={email} onChange={e=> setEmail(e.target.value)}></input>
          <button className="button" type="button" onClick={saveLocalStorage}><strong>Enviar</strong></button>
        </div>
      </div>
      <div className="secondary-content">
        <img src={BlackFriday} alt="Imagem black friday" className="black-friday"></img>
        <div className="focus">
          <h1 className="products">Produtos em destaque</h1>
          <div className="focus-items">
            <img src={Camiseta} alt="Camiseta preta lisa" className="focus-item"></img>
            <img src={Camisa} alt="Camisa preta lisa" className="focus-item"></img>
            <img src={Calça} alt="Calça jeans azul" className="focus-item"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
