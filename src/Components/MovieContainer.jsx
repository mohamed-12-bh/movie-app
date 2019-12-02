import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { Row, Container, Col } from "react-bootstrap";
import Modal from "./Modal";
class MovieContainer extends Component {
  render() {
    console.log('from movieContainer',this.props)
    return (
      <Container>
        <Row className="text-center">
          {this.props.tab.map(el => (
            <Col className="movie-container ">
              <MovieCard movieDetails={el} />
            </Col>
          ))}
          <Col>
            <Modal addMovie={this.props.addMovie} 
            
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MovieContainer;
