import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter((result, index )=> result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray,
      };
  }

  return state;
};

export default reducer;
