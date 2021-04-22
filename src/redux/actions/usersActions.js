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

const setAddUser = (newUser) => ({
  type: USERS.SET_ADD_USER,
  payload: newUser,
});

export { loadUsers, setError, setUsers, addUser, setAddUser };
