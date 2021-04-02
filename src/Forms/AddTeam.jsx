import React, { Component } from 'react'
import './form-style.css';

class AddTeam extends Component {
    render(){
        return (
            <div className="container-fluid d-flex right">
                    <div className="row-md-25">
                        <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Team ID</th>
                          <th scope="col">University Name</th>
                          <th scope="col">Nick Name</th>
                          <th scope="col">Rank</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="input">
                          <td><input class="form-control id-num" type="text" name="id" /></td>
                          <td><input class="form-control" type="text" name="name"/></td>
                          <td><input class="form-control" type="text" name="nname"/></td>
                          <td><input class="form-control id-num" type="text" name="rank"/></td>
                          <td><a type="submit" class="btn btn-outline-success">Save</a></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
            </div>
        );
    }

}
export default AddTeam;
