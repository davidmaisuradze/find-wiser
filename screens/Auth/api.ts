import { useCallback } from "react";
import { SignInCredentials } from "../../objects/interfaces/SignInCredentials";
import { User } from "../../objects/interfaces";

export const useSignInApi = () => {
    return useCallback(({ email, password }: SignInCredentials): Promise<any> => {
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
};