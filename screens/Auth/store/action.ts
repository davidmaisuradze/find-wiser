import { User } from "../../../objects/interfaces";

export enum Actions {
    SET_USER = "SET_USER",
    SIGN_OUT = "SIGN_OUT",
    SET_LOADING = "SET_LOADING",
    SET_ERROR = "SET_ERROR",
    SET_SUCCESS = "SET_SUCCES",
  }
  
  export function setUser(user: User | null) {
    return {
      type: Actions.SET_USER as Actions.SET_USER,
      payload: user,
    };
  }
  
  export function setLoading(payload: boolean) {
    return {
      type: Actions.SET_LOADING as Actions.SET_LOADING,
      payload: payload,
    };
  }
  
  export function signOutUser() {
    return {
      type: Actions.SIGN_OUT as Actions.SIGN_OUT,
    };
  }
  
  export function setError(error: string) {
    return {
      type: Actions.SET_ERROR as Actions.SET_ERROR,
      payload: error,
    };
  }
  
  export function setSuccess(msg: string) {
    return {
      type: Actions.SET_SUCCESS as Actions.SET_SUCCESS,
      payload: msg,
    };
  }
  export type AuthAction =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof signOutUser>
    | ReturnType<typeof setError>
    | ReturnType<typeof setSuccess>;