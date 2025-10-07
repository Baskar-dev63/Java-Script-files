
// Classes:

class Power {
    constructor(number) {
        this.type = Number(number)   
    }
    
    pow() {
        return console.log(this.type * this.type);
    }
   
}

new Power(4).pow();
new Power(5).pow();
new Power(6).pow();

let point=new Power(3);
point.row();


// Using a private property in class:

class Pizza {
    crust = "pizza";
    #sauce = "company"   //This is private property using # to define that.
    constructor(sizePizza){
         this.size = sizePizza
    }
    getCrust() {
        return this.crust;
    }
    setCrust(crust) {
        this.crust = crust;
    }
    bake() {
        return console.log(`${this.crust} is ${this.size} normally get by ${this.#sauce}`)
    }
}
const newone = new Pizza("medium");
newone.bake();
console.log(newone.crust);
console.log(newone.sauce);



// Parent class links with child class:

class Anotherpizza extends Pizza{
    constructor(sizepizza,crustpizza){
        super(sizepizza,crustpizza);
        this.type="margarita"

    }
    slices(){
        console.log(`this is ${this.type} ${this.size} size ${this.crust} pizza`);
    }
}
const mypizza=new Anotherpizza("medium","original");
mypizza.slices();
const nextone=new Anotherpizza("biggered","fake");
nextone.slices();