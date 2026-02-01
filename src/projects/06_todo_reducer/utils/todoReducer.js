import generateId from "./generateId.js";

const reducer = (state, action) => {
  if (action.type === "CHANGE_INPUT") {
    return {
      ...state,
      inputValue: action.payload.input,
    };
  }
  if (action.type === "ADD_FRUIT") {
    const value = state.inputValue.trim();
    if (!value) return state;
    return {
      ...state,
      fruits: [...state.fruits, { id: generateId(), name: value }],
      inputValue: "",
    };
  }
  return state;
};

export default reducer;
