export const ADD_USER = "auth/addUser";
export const REMOVE_USER = "auth/removeUser";
export const AUTH_LOADING = "auth/authLoading";

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload,
  };
}
export function removeUser(payload) {
  return {
    type: REMOVE_USER,
    payload,
  };
}
export function authLoading(payload) {
  return {
    type: AUTH_LOADING,
    payload,
  };
}
