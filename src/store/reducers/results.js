import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date().getTime(),
          value: action.results,
        }),
      };
    case actionTypes.DELETE_RESULT:
      const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter((result) => {
        return result.id !== action.id;
      });
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};
// push method not mutate the original array
// concat returns a new array immutable way of adding the element to array

// inside the sub-reducer access to global state is prohibited
// only we can access our local state

export default reducer;
