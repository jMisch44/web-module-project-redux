export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITE };
};

export const addFavorites = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};

export const removeFavorites = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
