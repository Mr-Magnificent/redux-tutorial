import $ from "jquery";
export const UPDATE_USER = 'user:updateUser';
export const SHOW_ERROR = 'user:showERROR';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            userError:"ERROR!!!"
        }
    }
}

export function apiRequest() {
    return dispatch => {
        $.ajax ({
            url: "https://google.com",
            success: function() {
                console.log("SUCCESS");
            },
            error: function() {
                console.log("ERROR");

                dispatch(showError());
            }
        })
    }
}