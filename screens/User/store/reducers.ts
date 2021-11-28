import { Reducer } from 'redux';
import { Actions, UserActions } from './actions';
import { User } from '../../../objects/interfaces';

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  loading: true,
  error: '',
};

const userReducer: Reducer<UserState, UserActions> = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case Actions.GET_USER_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case Actions.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case Actions.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
