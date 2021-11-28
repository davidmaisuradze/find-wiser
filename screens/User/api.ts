import { useCallback } from 'react';
import Http from '../../services/axios.service';
import { User } from '../../models/interfaces';

export function useGetCurrentUserProfileApi() {
    return useCallback((page = 1, limit=  3): Promise<any> => {
        return new Promise<User>((resolve, reject) => {
            resolve({
                id: 'testId',
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email@email.test',
                mobilePhone: '12312313',
                avatarUrl: 'nothing for now'
            })
        });
    }, []);
}
