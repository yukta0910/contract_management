import { ActionTypes } from "../action-creator/ActionTypes";
  
  interface UserState {
    isLoggedIn: boolean;
    username: string | null;
  }
  
  const initialState: UserState = {
    isLoggedIn: false,
    username: null,
  };
  
  const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        return {
          isLoggedIn: true,
          username: action.payload.username,
        };
      case ActionTypes.LOGOUT:
        return {
          isLoggedIn: false,
          username: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;