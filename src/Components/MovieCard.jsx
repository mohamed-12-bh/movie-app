import React from "react";
import Rating from "./Rating";
import { CardBody, Card } from "reactstrap";

export default function MovieCard(props) {
  return (
    <div>
      <Card style={{ width: "200px", height: "320px" }} className="card">
        <div className="img">
          <CardBody>
            <Rating rating={props.movieDetails.rating} />
          </CardBody>
          <img
            style={{ width: "60%" }}
            src={props.movieDetails.img}
            alt="..."
          />
          <CardBody>
            <p>{props.movieDetails.title}</p>
          </CardBody>
        </div>
      </Card>
      
      
    </div>
  );
}

