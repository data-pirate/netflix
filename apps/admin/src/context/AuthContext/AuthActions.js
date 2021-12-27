export const loginInitated = () =>({
    type: "LOGIN_INITIATED",
});


export const loginSuccess = (user) =>({
    type: "LOGIN_SUCCESS",
    payload: user
})


export const loginFailed = () =>({
    type: "LOGIN_FAILED",
})