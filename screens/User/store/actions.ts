export enum Actions {
    GET_USER_PROFILE_START = 'GET_USER_PROFILE_START',
    GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS',
    GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE',
}

export function getUserProfileStart() {
    return {
        type: Actions.GET_USER_PROFILE_START as Actions.GET_USER_PROFILE_START,
    };
}

export function getUserProfileSuccess(payload: any) {
    return {
        type: Actions.GET_USER_PROFILE_SUCCESS as Actions.GET_USER_PROFILE_SUCCESS,
        payload,
    };
}

export function getUserProfileFailure(payload: any) {
    return {
        type: Actions.GET_USER_PROFILE_FAILURE as Actions.GET_USER_PROFILE_FAILURE,
        payload,
    };
}

export type UserActions =
    | ReturnType<typeof getUserProfileStart>
    | ReturnType<typeof getUserProfileSuccess>
    | ReturnType<typeof getUserProfileFailure>;
