import { useDispatch } from "react-redux";
import { useSignInApi } from "../api";
import { useCallback } from "react";
import { setLoading, setError } from "./action";
import { SignInCredentials } from "../../../objects/interfaces/SignInCredentials";
import { handleError } from '../../../helpers/handleError';

export const useSignInService = () => {
    const signInApi = useSignInApi();
    const dispatch = useDispatch();
    // const showMessage = useShowMessage();
    return useCallback(
      (data: SignInCredentials): Promise<void> => {
        dispatch(setLoading(true));
        return signInApi(data)
          .then(() => {
            // showMessage("User signed in successfully", "success");
          })
          .catch((error: any) => {
            dispatch(setLoading(false));
            let errorMessage = handleError(error);
            dispatch(setError(errorMessage));
            
            // showMessage(error.message, "error");
          });
      },
      [dispatch, signInApi]
    );
};