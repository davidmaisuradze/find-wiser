import { Reducer } from "react";
import { User } from "../../../objects/interfaces";
import { AuthAction, Actions } from "./action";


interface AuthState {
  user?: User | null;
  authenticated: boolean;
  loading: boolean;
  error: string;
  success: string;
}

const initialState: AuthState = {
  user: null,
  authenticated: false,
  loading: false,
  error: "",
  success: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case Actions.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        authenticated: true,
      };
    case Actions.SIGN_OUT:
      return {
        ...state,
        user: null,
        loading: false,
        authenticated: false,
      };
    case Actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Actions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case Actions.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;