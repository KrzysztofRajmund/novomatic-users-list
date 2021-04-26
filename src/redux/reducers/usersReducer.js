import { USERS } from '../constants';

export const usersReducer = (
  state = { data: [], newUser: {}, message: '' },
  action
) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      return { ...state, data: action.payload.data.data };
    case USERS.LOAD_FAIL:
      return action.payload;
    case USERS.SET_ADD_USER:
      return { ...state, newUser: action.payload };
    case USERS.SET_MESSAGE:
      state = { ...state, message: action.payload };
      setTimeout(() => {
        state = { ...state, message: '' };
      }, 5000);

    default:
      return state;
  }
};
