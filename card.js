class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
        this.playable = true;
    }
}

class NinjaCard extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    showStat(){
    console.log(`name: ${this.name} cost: ${this.cost} power: ${this.power} resiliance: ${this.res}`);
    }

    attack(target) {
        if( target instanceof NinjaCard ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class PoseQuestion extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof NinjaCard) {
            this.stat == "res" ? target.res += this.magnitude : target.power += this.magnitude;
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const p1 = new NinjaCard("Red Belt Ninja",3,3,4);
const p2 = new NinjaCard("Black Belt Ninja", 4, 5, 4);

const e1= new PoseQuestion("Hard Algorithm",2,"increase target res by 3", "res", 3);
const e2 = new PoseQuestion("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res" , -2);
const e3 = new PoseQuestion("Pair Programming", 3, "increase target's power by 2", "power", 2);


p1.showStat();
e1.play(p1);
p1.showStat(); 
p2.showStat();
e2.play(p1);
p1.showStat(); 
p2.showStat();
e3.play(p1);
p1.attack(p2);

p1.showStat(); 
p2.showStat();