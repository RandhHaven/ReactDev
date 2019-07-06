import React, { Component } from 'react';
import './AddContact.css'

class AddContact extends Component
{
    /*constructor(nombre, apellido, nroTelefono)
    {
        
    }*/

    render(){
        return(
            <form>
                <div className="AddContact-div">                                      
                    <label> Country:
                    <select className="AccessLogin-Country">
                        <option value="#Argentina">Argentina</option>
                        <option value="#Brasil">Brasil</option>
                        <option value="#Alemania">Alemania</option>
                        <option value="#Peru">Peru</option>
                    </select>
                    </label>
                    <br/>
                    <label>
                        Is Administrator:                      
                    </label>
                    <br/>                 
                    <label> Mail: <input id="email" type="text"/>
                    </label>
                    <br/>    
                    <button className="btn btn-success center-block" type="button" onClick={this.handleClick}>Ingresar</button>
                </div>            
            </form>
        )
    };
}

export default AddContact;