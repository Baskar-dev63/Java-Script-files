// Object:

let person = {
    name: "Baskar",
    age: 20,
    country: "India",
    hobby: "Movies",
    action:()=>{
        return console.log(`My name is ${person.name}`);
    }
}
console.log(person); //Printing object.
console.log(person.action()); 

// JSON Data Type.

const newobj=JSON.stringify(person); //Changing into JSON string format.
console.log(newobj);
const anotherobj=JSON.parse(newobj); //JSON to object format.
console.log(anotherobj);

//  .......for in loop in object.

for (let key in person) {
    console.log(`${key}:${person[key]}`)
}


// .........for of loop

for (let arr of Object.entries(person)) {
    console.log(arr)
}


// ........Entries Method()


let fruits=["apple","banana","grape"];
console.log(fruits.entries());

let iterator=fruits.entries();
for(let [index,values] of iterator){
    console.log(`index:${index} values:${values}`)
}

let newarr=[...fruits.entries()];
console.log(newarr);


// Object Inheritance:

const vehicle={
    door:"2",
    engine:function(){
        return "vroom!";
    }
}
console.log(vehicle);
console.log(vehicle.engine());

const car=Object.create(vehicle);
console.log(car);
console.log(car.door);
car.engine=()=>{
    return "whoosh";
}
console.log(car.engine());
console.log(vehicle.engine());



// This method doesn't work in arrow function.

// Before Class this is object blueprint or template for objects

function Peoplecall(name){
    this.name=name;
}

// Prototype keyword:

Peoplecall.prototype.greet=function(){
    console.log(`Hi this is ${this.name} was a  Developer.`)
}

let person1=new Peoplecall("John");

person1.greet();

const myObject={
    city:"madrid",
    greet(){
        console.log(`Greeting from ${this.city}`)
    }
};

myObject.greet();


let myperson={
    name:"Harish",
    age:20,
    job:"Full Stack Developer",
    hobbies:"watching movies"
}

let newobject=Object.create(myperson);

newobject.name="karthi";
console.log(newobject);
