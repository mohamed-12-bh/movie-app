import React from "react";

import Rating from "./Rating";

const NavBar = ({changeStar,raiting,value,onChange = () => {}}) => {
  return (
    <form>
      <div>
        <div className="nav-menu">
          <div className="search-movie">
            <label className="search">
              <input
                type="input-search"
                value={value}
                onChange={event => {
                  onChange(event.target.value);
                }}
              />
            </label>
            <label>
              <button
                className="btn-search"
                onClick={event => {
                  event.preventDefault();
                }}
              >
                Search
              </button>
            </label>
          </div>

          <div className="rating">
            <Rating
              rating={raiting}
              changeRating={newRating => {
                changeStar(newRating);
              }}
              onChange={event => {
                changeStar(event.target.value);
              }}
              onClick={event => {
                changeStar(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default NavBar;
