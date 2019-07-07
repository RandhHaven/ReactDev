import React, { Component } from 'react';
import './AddContact.css'

class AddContact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            eded: ''
          };
    }

    onClickAddContact(){

    }


    render(){
        return(
            <div class="container">
                <div class="row pt-2">
                    <div class="col-md-2"/>
                    <div class="col-md-8">
                        <div class="card">
                            <div className="card-header">
                                <h4> Add Contact </h4> 
                            </div>
                            <form id="login-form" class="card-body" onSubmit={this.handleSubmit}> 
                                <div class="form-group">
                                    <div class="row pt-2">                                        
                                        <div class="col-md-2">
                                            <label> Nombre: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input id="nombre" type="text" class="form-control"/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Apellido: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input id="apellido" type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                    <div class="row pt-2">
                                    <div class="col-md-2">
                                            <label> Mail: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input id="mail" type="text" class="form-control"/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Confirm Mail: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input id="mailConfirm" type="text" class="form-control"/>
                                        </div>         
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label> Country: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <select class="form-control">
                                                <option value="#Argentina">Argentina</option>
                                                <option value="#Brasil">Brasil</option>
                                                <option value="#Alemania">Alemania</option>
                                                <option value="#Peru">Peru</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Administrator:  </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input id="isAdministrator" name="isAdministrator" type="checkbox"/>
                                        </div>    
                                        
                                    </div>                                  
                                    
                                </div>
                                <button className="btn btn-primary center-block" type="button" onClick={this.onClickAddContact}>Ingresar</button>  
                            </form>
                        </div>
                    </div>
                    <div class="col-md-2"/>
                    <form></form>
                </div>
            </div>
        )
    };
}

export default AddContact;