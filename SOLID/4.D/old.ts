import { CookMethod } from "./cookmethod"
import { Restaurant } from "./resturant"
import { Oven } from "./oven"





let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");
