let authState = {
  token: '',
  role: 0,
};

export const userReducer = (state = authState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.payload;
    case 'CLEAR_DATA':
      return null;
    default:
      return state;
  }
};
