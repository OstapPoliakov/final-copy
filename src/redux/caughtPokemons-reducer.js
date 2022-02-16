import { pokemonAPI } from "../api/api";

const SET_CAUGHT_POKEMONS = "SET_CAUGHT_POKEMONS";
const SET_LOADING = "SET_LOADING";

const initialState = {
  caughtPokemons: [],
  isLoading: false
};

// Reducers
const caughtPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAUGHT_POKEMONS:
      return {
        ...state,
        caughtPokemons: [...state.caughtPokemons, ...action.caughtPokemonsArray]
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    default:
      return state;
  }
};

// Action Сreators
export const setCaughtPokemonsAC = (caughtPokemonsArray) => ({
    type: SET_CAUGHT_POKEMONS,
    caughtPokemonsArray
});

export const setLoadingAC = (isLoading) => ({
    type: SET_LOADING,
    isLoading
});

// Thunks
export const caughtPokemonsThunk = (id) => {
  return async (dispatch) => {
    dispatch(setLoadingAC(true));

    let response = await pokemonAPI.getPokemons(id,1);
    let results =  response.results;
    // помещаем в store
     dispatch(setCaughtPokemonsAC(results));
     dispatch(setLoadingAC(false));
  };
};

export default caughtPokemonsReducer;