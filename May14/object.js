// Object Syntax
const obj = {
    key: value
};

// Create an Object
const person = {
    name: "shiyam",
    age: 22,
    role: "Developer"
}
console.log(person);


// Accessing Dot Notation
const person1 = {
    name: "shiyam",
    age: 22,
    role: "Developer"
}
console.log(person1.name);


// Accessing Bracket Notation
// Ex:1
const person2 = {
    name: "shiyam",
    age: 22,
    role: "Developer"
}
console.log(person2["age"]);

// Ex: 2
const user = {
    "first name": "shiyam"
};
console.log(user["first name"]);

// Ex: 3
// Dynamic Property Access
const person = {
    name: "Santhosh",
    age: 25
};
let key = "name";
console.log(person[key]);

// Adding Properties
const person2 = {
    name: "shiyam",
    age: 22,
    role: "Developer"
}
person.city = "Thiruvarur"
console.log(person2);


// Updating Properties
const person = {
    name: "shiyam",
    age: 22,
    role: "Developer"
}
person.age = 27
console.log(person);


// Deleting Properties
const person = {
    name: "shiyam",
    age: 22,
    role: "Developer"
}
delete person.age;
console.log(person);


// Object Destructuring 
const obj = {
    name: "shiyam",
    age: 22,
    role: "Developer",
    city: "Thiruvarur"
}
let {name, ...sample} = obj
console.log(sample)


// Spread operator with objects 
// Copy Object
let obj = {
    name: "shiyam",
    age: 22,
    role: "Developer",
    city: "Thiruvarur"
}
let res = {...obj}
console.log(res);

// Merge Object
let obj = {
    name: "shiyam",
    age: 22
}
let obj2 = {
    role: "Developer",
    city: "Thiruvarur"
}
let res = {...obj, ...obj2}
console.log(res);



// Object
// Object.assign() - used to copy properties from one or more source objects into a target object
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const result = Object.assign({}, obj1, obj2, obj3);
console.log(result); 
// output:  { a: 1, b: 2, c: 3 }


// Object.keys() - used to get all the keys (property names) of an object as an array
const user = { name: "Alice", age: 25 };
console.log(Object.keys(user));
// Output:  ["name", "age"]


// Object.values() - method used to get all values of an object as an array
const user = { name: "Alice", age: 25 };
console.log(Object.values(user));
// Output: ["Alice", 25]


//Object.entries - that returns an array of an object's key-value pairs.
const user = {
    name: "Shiyam",
    age: 21,
    city: "Trichy"
};
const result = Object.entries(user);
console.log(result);
// Output: [["name", "Shiyam"],
//          ["age", 21],
//          ["city", "Trichy"]]


// Object.freeze() - used to make an object immutable (cannot be changed)
const user = {
    name: "Shiyam",
    age: 21
};
Object.freeze(user);
user.age = 25;
console.log(user.age);
// Output: 21


// Object.seal() - used to seal an object.Cannot add new properties
                                            // Cannot delete properties
                                            // Can modify existing properties

const user = {
    name: "Shiyam",
    age: 21
};
Object.seal(user);
user.age = 25; 
user.city = "Thiruvarur"; // x
delete user.name; // x
console.log(user);

 
//Object.create() - used to create a new object using another object as its prototype
const user ={
    name: "shiyam"
}
const res = Object.create(user);
console.log(res.name)
// Output: shiyam


// Object.hasOwn() - used to check whether an object contains a specific property directly (own property)
const user = {
    name: "Shiyam",
    age: 21
};
console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "city"));
// Output: true
//         false


// Object.fromEntries() - used to convert an array of key-value pairs into an object
const arr = [
    ["name", "Shiyam"],
    ["age", 21]
];
const obj = Object.fromEntries(arr);
console.log(obj);