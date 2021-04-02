import React, { Component } from 'react'
import './form-style.css';

class AddResult extends Component {
    render(){
        return (
            <div className="container-fluid d-flex right">
                    <div className="row-md-25">
                        <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Game ID</th>
                          <th scope="col">Team #1 ID</th>
                          <th scope="col">Team #2 ID</th>
                          <th scope="col">Score #1</th>
                          <th scope="col">Score #2</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="input">
                          <td><input class="form-control id-num" type="text" name="game-id" /></td>
                          <td><input class="form-control id-tnum" type="text" name="team-1-id"/></td>
                          <td><input class="form-control id-tnum" type="text" name="team-2-id"/></td>
                          <td><input class="form-control id-num" type="text" name="score-1"/></td>
                          <td><input class="form-control id-num" type="text" name="score-2"/></td>
                          <td><a type="submit" class="btn btn-outline-success">Save</a></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
            </div>
        );
    }

}
export default AddResult;
