import {SET_DATA, CLEAR_DATA} from '../types';

export const setData = (user) => {
  return {
    type: SET_DATA,
    payload: user,
  };
};

export const clearData = () => {
  return {
    type: CLEAR_DATA,
  };
};
