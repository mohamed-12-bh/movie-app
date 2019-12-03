import React, { Component } from "react";
import { Card } from "reactstrap";
export default class Modal extends Component {
  state = {
  
      img: "",
      title: "",
      rating: 0
    
  };
  changeHandler = e =>{ this.setState({ [e.target.name]: e.target.value });}
  render() {
    console.log('from modal ',this.state)
    return (
      <div >
        <Card style={{ width: "200px", height: "320px" }} className="card">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            +
          </button>

          <div  className="movi modal fade"
            
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div class="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add a New Film
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="movie">
                  <div>
                    <div>
                      <label className="label"> Titel of Movie</label>
                      <input
                        className="modal-body"
                        type="text"
                        // value={value}
                        onChange={this.changeHandler}
                        name="title"
                      />
                    </div>
                  </div>
                  <div className="movie">
                    <label className="label"> Link of Movie </label>
                    <input
                      className="modal-body"
                      type="text"
                      // value={value}
                      onChange={this.changeHandler}
                      name="img"
                    />
                  </div>
                  <div className="movie">
                    <label className="label"> Rate of Movie</label>
                    <input
                      className="modal-body"
                      type="text"
                      // value={value}
                      onChange={this.changeHandler}
                      name="rating"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() =>
                      this.props.addMovie(this.state)
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
