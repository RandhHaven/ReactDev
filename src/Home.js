import React, { Component } from 'react';
import './Home.css'
import imagen1 from './Imagenes/agenda2.png';
import imagen2 from './Imagenes/agenda3.jpg';
import imagen3 from './Imagenes/agenda6.jpg';

class Home extends Component {
    render() {
        return (
            <form>
                <div className="row pt-3">
                    <div className="container">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-item active">
                                <img className="img-fluid" src={imagen1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid" src={imagen2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <   img src={imagen3} alt="Third slide" />
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        <div>
                            <header>
                                <h4>Page Contacts</h4>
                            </header>
                            <div className="row">
                                <div className="col-md-4 style-widh=100px">
                                    <h3>Save contacts in the electronic phonebook</h3>
                                    <label> Hay cuatro razones principales por las que deberías tener un mensaje de bienvenida en tu arsenal de marketing:
                                        Porque los mensajes de bienvenida tienen una tasa de apertura un 86% superior y un CTR un 196% más alto que los demás emails normales (Social Mouths).
                                        Para dar una primera buena impresión y empezar la relación con el pie derecho.
                                        Para evitar que los clientes se den de baja porque se olvidan de a qué se suscribieron.
                                        Para hacer la primera segmentación básica de los clientes. 
                                        Puedes pedir alguna preferencia para recoger una primera información sobre sus gustos.
                                    </label>
                                </div>
                                <div className="col-md-4 body-card">
                                    <h3>Guarde contactos en su Agenda Electronica</h3>
                                    <label> Hay cuatro razones principales por las que deberías tener un mensaje de bienvenida en tu arsenal de marketing:
                                        Porque los mensajes de bienvenida tienen una tasa de apertura un 86% superior y un CTR un 196% más alto que los demás emails normales (Social Mouths).
                                        Para dar una primera buena impresión y empezar la relación con el pie derecho.
                                        Para evitar que los clientes se den de baja porque se olvidan de a qué se suscribieron.
                                        Para hacer la primera segmentación básica de los clientes. Puedes pedir alguna preferencia para recoger una primera información sobre sus gustos.
                                    </label>
                                </div>
                                <div className="col-md-4 body-card">
                                    <h3>Guarde contactos en su Agenda Electronica</h3>
                                    <label> Hay cuatro razones principales por las que deberías tener un mensaje de bienvenida en tu arsenal de marketing:
                                        Porque los mensajes de bienvenida tienen una tasa de apertura un 86% superior y un CTR un 196% más alto que los demás emails normales (Social Mouths).
                                        Para dar una primera buena impresión y empezar la relación con el pie derecho.
                                        Para evitar que los clientes se den de baja porque se olvidan de a qué se suscribieron.
                                        Para hacer la primera segmentación básica de los clientes. Puedes pedir alguna preferencia para recoger una primera información sobre sus gustos.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Home;