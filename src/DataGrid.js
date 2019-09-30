import React, { Component } from 'react'
import './DataGrid.css'
import firebase from 'firebase'
import {firebaseConfig} from './config/db_config.js'
import 'firebase/database'

class DataGrid extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dbusuarios :[                
            ],
            nombreUsu : '',
            passwordUsu: ''
        };
        this.app = firebase.initializeApp(firebaseConfig);
        this.db = this.app.database().ref().child('dbusuarios');

        this.state1 = {
            tasks: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'],
          };
    }

    componentDidMount(event)
    {}

    onClickEdit(){
    }

    onClickDelete(){
    }

    render(){
        const { tasks } = this.state1;
        return(
            <div class="row pt-2">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>
                                <button class="btn btn-primary" type="button" name="Back" onClick={this.onClickEdit}> Edit </button>
                                <button class="btn btn-danger mx-auto" type="button" name="Back" onClick={this.onClickDelete}> Delete </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="grid-Data">
                    {tasks}
                </div>                
            </div>
           
        )
    };
}

export default DataGrid;