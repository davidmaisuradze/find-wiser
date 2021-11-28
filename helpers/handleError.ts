import Toast from 'react-native-toast-message';

export function handleError(error: any): void {
    let message = '';
    if (error.response) {
        message = error.response.data ? error.response.data.message : 'Unexpected Error';
    } else if (error.request) {
        message = "Connection Error";
    } else {
        message = "Unexpected Error";
    }

    if(message) {
        Toast.show({type: 'error', text1: 'error', text2: message});
    }
}
