import React, {Component} from 'react'; 
import './Home.css'

class Home extends Component
{  
    onClickRef()
    {}

    render()
    {
        return(
            <form>
                <div>               
                    <h4>Pagina de Bienvenida</h4>
                    <br/>
                    <label> Actualmente se envían 140.000 millones de emails diarios. Es impresionante la cantidad de contenido que se genera a diario. Los mensajes de bienvenida ayudan a organizar el flujo de emails que llegará porque ayudará al receptor a recordar la newsletter a la que se suscribió y sabrá la información que recibirá. Aquí tienes seis buenos ejemplos de mensajes de bienvenida. 
                    </label>
                    <br/>
                    <label> Hay cuatro razones principales por las que deberías tener un mensaje de bienvenida en tu arsenal de marketing:

                        Porque los mensajes de bienvenida tienen una tasa de apertura un 86% superior y un CTR un 196% más alto que los demás emails normales (Social Mouths).
                        Para dar una primera buena impresión y empezar la relación con el pie derecho.
                        Para evitar que los clientes se den de baja porque se olvidan de a qué se suscribieron.
                        Para hacer la primera segmentación básica de los clientes. Puedes pedir alguna preferencia para recoger una primera información sobre sus gustos.
                    </label>
                    <br/>                    
                 
                </div>            
            </form>
        );
    }
}

export default Home;