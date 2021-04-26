import { USERS } from '../constants';

const loadUsers = () => ({
  type: USERS.LOAD,
});

const setUsers = (posts) => ({
  type: USERS.LOAD_SUCCESS,
  payload: posts,
});

const setError = (error) => ({
  type: USERS.LOAD_FAIL,
  payload: error,
});

const addUser = (user) => ({
  type: USERS.ADD_USER,
  payload: user,
});

const setAddUser = (newUser, message) => ({
  type: USERS.SET_ADD_USER,
  payload: newUser,
  message: message,
});

const getMessage = () => ({
  type: USERS.GET_MESSAGE,
});

const setMessage = (message) => ({
  type: USERS.SET_MESSAGE,
  payload: message,
});

export {
  loadUsers,
  setError,
  setUsers,
  addUser,
  setAddUser,
  getMessage,
  setMessage,
};
