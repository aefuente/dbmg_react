import React, { Component } from 'react'
import AddTeam from './AddTeam';
import AddGame from './AddGame';
import AddResult from './AddResult';
import './form-style.css';

class Forms extends Component {
    render(){
        return (
            <div>
                <div className="row">
                    <AddTeam />
                </div>
                <div className="row">
                    <AddGame />
                </div>
                <div className="row">
                    <AddResult />
                </div>
            </div>
        );
    }

}
export default Forms;
