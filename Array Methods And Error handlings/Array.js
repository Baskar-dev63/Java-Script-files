//Map() Method:

let arr = [1, 2, 3, 4, 5, 6];

//It takes function as argument.
let newarr = arr.map((num) => num * 2);
console.log(newarr);


//forEach() Method:
//it does give an  array a output
//print values with index.
let fruit = ["apple", "orange", "kiwi", "grape"];
function handleArray(arr){
    arr.forEach((value, index) => {
        console.log((`The fruits:${value}:${index}`));
    })
}
handleArray(fruit);//calling a funtion.passing a array as argument.



const person = [
    {
        name: "Jhon",
        age: "20",
        Job: "Full Stack Developer"
    },
    {
        name: "David",
        age: "24",
        Job: "Ai Trainer"
    },
    {
        name: "Raj",
        age: "19",
        Job: "Model"

    },
    {
        name: "Ravi",
        age: "25",
        Job: "Police officer"
    }
];

//For each to give anything but can use get objects.

person.forEach((val) => {  //here val is that object's element in the person array.
    console.log(`My Name is ${val.name} and Iam ${val.Job} in my ${val.age}s`);
}
)

//Map return a new array .

const data = person.map((val) => {  //Here this value in new Array.
    return (`My Name is ${val.name} and Iam ${val.Job} in my ${val.age}s`);    
})


//Filter is used filter the element with some conditions for our usages.

const filter=person.filter((val)=>val.age>20).map((val)=>val.age) //filter panni athoda value new array map panni erukan.
console.log(filter);

//Here only used filter get condition based objects only.

const less=person.filter((val)=>val.age<=20)
console.log(less);

//Filtered elements using for each printing the values:
less.forEach((val)=>{
    console.log(val.name);
    console.log(val.Job);

})
