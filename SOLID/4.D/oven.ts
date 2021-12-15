import { CookMethod } from "./cookmethod";

export class Oven implements CookMethod{
    private _isOn : boolean;

    public electricon() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRIC OVEN IS ON!</p>";
        }, 1000);
        console.log("THE ELECTRIC OVEN IS ON!"); 
        this._isOn = true;
    }

    public electricoff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRIC OVEN IS OFF!</p><hr>";
        }, 3000);
        console.log("THE ELECTRIC OVEN IS OFF!"); 
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");
        }
    }
}

