export const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'login':
      return !state;
    case 'logout':
      return false;
    default:
      return state;
  }
};
