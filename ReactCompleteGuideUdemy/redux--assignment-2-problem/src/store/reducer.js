import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.DELETE_PERSON:
      const updatedState = state.persons.filter(
        (person) => person.id !== action.personId
      );
      return {
        ...state,
        persons: updatedState,
      };
  }
  return state;
};
export default reducer;
