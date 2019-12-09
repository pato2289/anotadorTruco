import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header'
import Puntajes from './components/Puntajes'
import Jugadores from './components/Jugadores'

function App() {

  const[contadorNosotros, setContadorNosotros] = useState(0);
  const[contadorEllos, setContadorEllos] = useState(0);

  localStorage.setItem("puntajeNosotros", contadorNosotros);
  localStorage.setItem("puntajeEllos", contadorEllos);

  useEffect(() => {
    const persistenciaContadorNosotros = localStorage.getItem('puntajeNosotros');
    const persistenciaContadorEllos = localStorage.getItem('puntajeEllos');

    if(persistenciaContadorNosotros) {
      setContadorNosotros(persistenciaContadorNosotros)
    }

    if(persistenciaContadorEllos) {
      setContadorEllos(persistenciaContadorEllos)
    }

  }, [])


  const incrementarNosotros = () => {
        if(contadorNosotros < 30 && contadorNosotros >= 0){
          setContadorNosotros(parseInt(contadorNosotros) + 1);
        }
    }

    const decrementarNosotros = () => {
      if(contadorNosotros <= 30 && contadorNosotros > 0){
        setContadorNosotros(parseInt(contadorNosotros) - 1);
      }
  }


  const incrementarEllos = () => {
    if(contadorEllos < 30 && contadorEllos >= 0){
      setContadorEllos(parseInt(contadorEllos) + 1);
    }
}

const decrementarEllos = () => {
  if(contadorEllos <= 30 && contadorEllos > 0){
    setContadorEllos(parseInt(contadorEllos) - 1);
  }
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Header/>
        </div>
      </div>
        
      <div className="row">
        <div className="col-lg-6">
          <Jugadores 
            incrementarNosotros={incrementarNosotros}
            decrementarNosotros={decrementarNosotros}
            incrementarEllos={incrementarEllos}
            decrementarEllos={decrementarEllos}
            contadorNosotros={contadorNosotros}
            contadorEllos={contadorEllos}
          />
        </div>
        <div className="col-lg-6">
          <Puntajes
            contadorNosotros={contadorNosotros}
            contadorEllos={contadorEllos} 
          />
        </div>
      </div>

    </div>
  );
}

export default App;
