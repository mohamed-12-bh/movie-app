import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import MovieContainer from "./Components/MovieContainer";
import "./Components/MovieApp.css";


export default class App extends Component {
  state = {
    minRating: 0,

    tab: [
      {
        img:
          "http://fr.web.img2.acsta.net/c_215_290/pictures/18/11/13/11/42/1696141.jpg",
        title: "Spider-Man",
        rating: 3
      },
      {
        img: "https://images-na.ssl-images-amazon.com/images/I/51jEvflYHvL.jpg",
        title: "The Lion King",
        rating: 4
      },
      {
        img:
          "https://www.thecameroontoday.com/wp-content/uploads/2019/08/Capture1-1.png",
        title: "The Fast && The Furious",
        rating: 5
      },
      {
        img:
          "http://fr.web.img6.acsta.net/c_215_290/pictures/14/01/22/18/38/106417.jpg",
        title: "Need For Speed",
        rating: 2
      }
    ],
    
    titleFilter: ""
  };

  // filterMovie() {
  //   return this.state.tab.filter(
  //     el =>
  //       el.rating >= this.state.minRating &&
  //       el.title
  //         .toUpperCase()
  //         .includes(this.state.titleFilter.toUpperCase().trim())
  //   );
  // }

  addNewMovie = newMovie => {
    this.setState({
      ...this.state,
      tab:[...this.state.tab,newMovie]
    });
  };

  render() {
    return (
      <div className="movi-app">
        <NavBar
          raiting={this.state.minRating}
          changeStar={newRating => {
            this.setState({
              minRating: newRating
            });
          }}
          value={this.state.titleFilter}
          onChange={newTitleFilter => {
            this.setState({
              titleFilter: newTitleFilter
            });
          }}
        />
        <div>
          <div className="movie-container">
            <MovieContainer
              tab={this.state.tab.filter(el=>el.title.toUpperCase()
                .includes(this.state.titleFilter.toUpperCase().trim()) && el.rating>= this.state.minRating)}
              addMovie={this.addNewMovie}
              
            />
          </div>
        </div>
      </div>
    );
  }
}
