import React, { useState, useEffect } from 'react';

const Jugadores = (props) => {

    const { incrementarNosotros, decrementarNosotros,
            incrementarEllos, decrementarEllos,
            contadorNosotros, contadorEllos        
    } = props;

    const ganadorParcial = () => {
        if(contadorNosotros > contadorEllos){
            return "Nosotros"
        } else if (contadorNosotros < contadorEllos) {
            return "Ellos"
        } else {
            return "Empate"
        }
    }

    const diferenciaDePuntos = () => {
        if(contadorNosotros > contadorEllos){
            return contadorNosotros - contadorEllos
        } else if (contadorNosotros < contadorEllos) {
            return contadorEllos - contadorNosotros
        } else {
            return 0
        }
    }


    return (
        <div> 
        <div className="container jugadores">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="text-center">Nosotros</h2>
                    <div className="row">
                        <div className="col-6">
                            <button 
                                className="btn btn-success btn-block"
                                onClick={incrementarNosotros}
                                >+
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-danger btn-block"
                                onClick={decrementarNosotros}
                                >-
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center">Ellos</h2>
                    <div className="row">
                        <div className="col-6">
                            <button 
                                className="btn btn-success btn-block"
                                onClick={incrementarEllos}
                                >+
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-danger btn-block"
                                onClick={decrementarEllos}
                                >-
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container info">
            <div className="row">
                <div className="col-lg-12">
                    <p>Ganando: {ganadorParcial()}</p>
                    <p>Diferencia de puntos: {diferenciaDePuntos()}</p>
                </div>
            </div>
        </div>
        </div>

     );
}
 
export default Jugadores;