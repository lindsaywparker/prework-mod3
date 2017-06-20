function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  console.log(action);
  if(typeof action.postID !== 'undefined') {
    return {
      ...state,
      [action.postID]: postComments(state[action.postID], action)
    }
  }
  return state;
}

export default comments;