import { ActionTypes } from "./ActionTypes";

export const login = (username: string, password: string) => ({
  type: ActionTypes.LOGIN,
  payload: { username, password },
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});