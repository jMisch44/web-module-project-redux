import React from 'react';
import { connect } from "react-redux";
import { removeFavorites } from "../actions/favoritesActions";
import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const handleRemoveFavorite = (id) => {
    props.removeFavorites(id);
  };

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {props.favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span
                  class="material-icons"
                  onClick={() => {
                    handleRemoveFavorite(movie.id);
                  }}
                >
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorite.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorites })(FavoriteMovieList);