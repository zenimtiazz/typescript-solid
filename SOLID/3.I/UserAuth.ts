
export interface UserAuth {
    checkPassword(password: string) : boolean;
    resetPassword();
    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}
