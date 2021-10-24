const initialState = {
  userEmail: 'developer21',
  sign: false
}

export default function login (state = initialState, action) {
  switch (action.type) {
    case "REDUCER_SIGN":
      return {
        ...state,
        sign: true
      }
    default:
      return state;
  }
}