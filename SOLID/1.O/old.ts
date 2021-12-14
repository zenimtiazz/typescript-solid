import { Animal } from "./animal";
import { Zoo } from "./zoo";

let zoo = new Zoo;
let cat = new Animal("cat", "meow");
let dog = new Animal("dog", "booow");
let parrot = new Animal("parrot", "I am a pirate");

zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(parrot);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.name+ ": " + animal.sound+ "<br>");
});