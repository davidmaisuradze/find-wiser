import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
    getUserProfileStart,
    getUserProfileSuccess,
    getUserProfileFailure
} from './actions';

import { handleError } from '../../../helpers/handleError';
import {useGetCurrentUserProfileApi} from '../api';

export const useGetCurrentUserProfileService = () => {
    const getCurrentUserProfileApi = useGetCurrentUserProfileApi();
    const dispatch = useDispatch();

    return useCallback((page = 1, limit=  3): Promise<void> => {
        dispatch(getUserProfileStart());
        return getCurrentUserProfileApi()
            .then((response: any) => {
                dispatch(getUserProfileSuccess(response));
            })
            .catch((error: any) => {
                let errorMessage = handleError(error);
                dispatch(getUserProfileFailure(errorMessage));
            });
    }, [dispatch, getCurrentUserProfileApi]);
};
