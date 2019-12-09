import React from 'react';

const Puntajes = ({contadorNosotros, contadorEllos}) => {

    return ( 
        <div className="container puntajes">
            <div className="row">
                <div className="col-12 puntaje">
                    <h1 className="text-center">Puntaje</h1>
                    <div className="row text-center">
                        <div className="col-sm-6">
                            <h3>Nosotros</h3>
                            <p className="contador">{contadorNosotros}</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Ellos</h3>
                            <p className="contador">{contadorEllos}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 puntaje">
                    <h1 className="text-center">Para ganar</h1>
                    <div className="row text-center">
                        <div className="col-sm-6">
                            <h3>Nosotros</h3>
                            <p className="contador">{30 - contadorNosotros}</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Ellos</h3>
                            <p className="contador">{30 - contadorEllos}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Puntajes;