import React, { Component } from 'react'
import './form-style.css';

class AddGame extends Component {
    render(){
        return (
            <div className="container-fluid d-flex left">
                    <div className="row-md-25">
                        <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Game ID</th>
                          <th scope="col">Rank 1</th>
                          <th scope="col">Rank 2</th>
                          <th scope="col">Location</th>
                          <th scope="col">Date</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="input">
                          <td><input class="form-control id-num" type="text" name="game-id" /></td>
                          <td><input class="form-control id-num" type="text" name="rank1"/></td>
                          <td><input class="form-control id-num" type="text" name="rank2"/></td>
                          <td><input class="form-control" type="text" name="location"/></td>
                          <td><input class="form-control id-num" type="text" name="date"/></td>
                          <td><a type="submit" class="btn btn-outline-success">Save</a></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
            </div>
        );
    }

}
export default AddGame;
