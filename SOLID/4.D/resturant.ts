import { CookMethod } from "./cookmethod"

export class Restaurant {
    private _name : string;
    private _oven : CookMethod;

    constructor(name : string,_oven : CookMethod) {
        this._name = name;
        this._oven = _oven;

    }

    public Cook(item : string) {
        this._oven.electricon();
        this._oven.bake(item);
        this._oven.electricoff();
    }
}
