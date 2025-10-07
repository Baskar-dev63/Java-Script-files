// settimeout function.

console.log("first");
setTimeout(()=>console.log("second")
,2000);
console.log("third");

// Using promises and then() method to call the value and catch() method if error catch.

const mypromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes this resolved");
    }
    else {
        reject("no its rejected");
    }

}
)

console.log(mypromise);

mypromise
    .then((value) => {
       return value+" welcome";
    }
    )
    .then((newvalue) => console.log(newvalue)).catch(
        (err)=>{
            console.log(err);
        }
    )

// Calling API using a fetch method

const users=fetch("https://jsonplaceholder.typicode.com/users");//fetch url
console.log(users); //fetched that is a promise:

users.then((value)=>{  //here the promise chain event value get as response .
    return value.json(); //Here the response was made array of object by json() method().
}
)
.then((newvalue)=>
{
    console.log(newvalue); // Here printing the value
    newvalue.forEach((val)=>console.log(val))    //Here the objects all get by forEach method().
})


// Async and await :

// async and await function is like promise it doesnt stop the flow of js.

const userdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    const data = await response.json();
    return data;
}

userdata();

//Here is the example for that global variable containing value.

const objects = {
    content: []
}

console.log(objects);//Here we defined object with an property of empty array.

const anotheruser = async () => {
    const data = await userdata();
    console.log(data);
    objects.content = data; //here send the data  to the array.
    console.log(objects); //here we can see the objects array was get data values.
}
anotheruser();
console.log(objects); 
//so we here thinking that the value is geted but the promises not work like here global scope did'nt get it.

// Fetch Method().. 

const jokeObj = {
    id: 'TfVvX0wscib',
    joke: 'How do you know if there’s an elephant under your bed? Your head hits the ceiling!' 
};

const getJokes = async (jokeobj) => {
    const jokes = await fetch("https://httpbin.org/post",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(jokeobj)
        })
    const data = await jokes.json();
    console.log(data)
}

getJokes(jokeObj);