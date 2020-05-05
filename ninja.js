
class Ninja {
    constructor(name) {
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 50;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(`name: ${this.name} speed: ${this.speed} strength: ${this.strength} health: ${this.health}.`)
    }
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja{
    constructor(name, wisdom) {
        super(name)
        this.wisdom = 10;
        this.strength = 5;
        this.speed = 5;
        this.health = 100;
    }



    speakWisdom() {
        let x = Math.floor((Math.random() * 6));
        const speak = ["What one programmer can do in one month, two programmers can do in two months.", "The drunken Sensei Master always knows what code to write, therefore, he writes no code.", "the way of the ninja warrior leads to the way of the ninja warrior", "not all who code are smart", "the master of code understands all paths to null"];
        console.log(`Sensei wisdom is: ${this.wisdom}`);
        console.log(speak[x]);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();



const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();

console.log(superSensei.wisdom);
