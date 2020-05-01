import * as actionTypes from '../store/actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date().getTime(),
          value: state.counter,
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

export default reducer;
