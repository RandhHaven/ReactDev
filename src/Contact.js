import React, {Component} from 'react';

class Contact extends Component{

    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-2"/>
                    <div class="col-md-8">
                        <div>
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
                        </div>
                    </div>
                    <div class="col-md-2"/>
                    <form></form>
                </div>
                
            </div>
        )
    }
}

export default Contact; 