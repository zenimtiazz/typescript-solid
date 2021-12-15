import { UserAuth } from "./UserAuth"
export class User implements UserAuth {
    private _password : string = 'user';
    private _facebookToken : string;
    private _googleToken : string;

    checkGoogleLogin(token) {
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
