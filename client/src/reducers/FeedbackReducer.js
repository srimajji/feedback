const initialState = [{
  text: 'Use Redux',
  marked: false,
  id:0
}];

function FeedbackReducer(state = initialState, action) {
  switch (action.type) {
  case "ADD_TODO":
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      marked: false,
      text: action.text
    }, ...state];

  case "DELETE_TODO":
    return state.filter(todo =>
      todo.id !== action.id
    );
  
  default:
    return state;
  }
}

export default FeedbackReducer;