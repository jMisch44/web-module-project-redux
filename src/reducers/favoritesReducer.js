import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [
    {
      id: 123456,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      metascore: 100,
      genre: "Drama",
      description:
        "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy.",
    },
  ],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    case TOGGLE_FAVORITE:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
