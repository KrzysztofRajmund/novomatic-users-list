import { USERS } from '../constants';

const usersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      console.log('GET reducer', action.payload.data);
      return action.payload.data;
    case USERS.LOAD_FAIL:
      return action.payload;
    case USERS.SET_ADD_USER:
      console.log('SET reducer');
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
