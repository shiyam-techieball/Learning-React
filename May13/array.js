// Creating Array
const fruits = ["Itachi", "Minato", "Jiraiya"];
console.log(fruits);
// Output: ["Itachi", "Minato", "Jiraiya"]

// Accessing Elements
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango


// Array Length
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // 3


// **Important Points**
const data = ["Shiyam", 25, true];
// Arrays can store different data types
// Arrays are mutable (values can be changed)


// Array Methods
// push() - Adds an element to the last position
const team = ["Naruto", "Luffy", "Goku"];
team.push("Ichigo");
console.log(team);
// Output: ["Naruto", "Luffy", "Goku", "Ichigo"]


// pop() - Removes last element
const team = ["Naruto", "Luffy", "Goku"];
team.pop();
console.log(team); 
// Output: ["Naruto", "Luffy"]

// unshift() - Adds element at beginning.
const team = ["Naruto", "Luffy", "Goku"];
team.unshift("Saitama");
console.log(team);
// Output: ["Saitama", "Naruto", "Luffy", "Goku"]

// Shift() - Removes first element
const team = ["Naruto", "Luffy", "Goku"];
team.shift();
console.log(team);
// Output: ["Naruto", "Luffy", "Goku"]

// Splice() - Used to remove or insert at any position
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
team.splice(1, 2, "Minato"); 
console.log(team);
// Output: ["Naruto", "Minato", "Ichigo"]


// slice() - Used to extract elements (like cutting a piece of a cake)
// **Original array NOT Changed**
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
const newTeam = team.slice(1, 3);
console.log(newTeam);
console.log(team);
// Output: ["Luffy", "Goku"]
//         ["Naruto", "Luffy", "Goku", "Ichigo"]


// concat() - 1Joins two arrays into one new array
// **Original array NOT Changed**
const team1 = ["Naruto", "Luffy"];
const team2 = ["Goku", "Ichigo"];
const allHeroes = team1.concat(team2);
console.log(allHeroes);
//  Output: ["Naruto", "Luffy", "Goku", "Ichigo"]


// join() - Combines all elements into a single string
// **Original array NOT Changed**
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
const result = team.join("-");
console.log(result);
// Output: Naruto-Luffy-Goku-Ichigo


// find() - Used to find an element based on condition
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
const result = team.find((hero) => {
  return hero.startsWith("G");
});
console.log(result);
// Output: Goku


// findIndex() - Same as find() but returns index
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
const index = team.findIndex((hero) => {
  return hero === "Luffy";
});
console.log(index);
// Output: 1


// includes() - Returns true or false
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
console.log(team.includes("Goku"));
console.log(team.includes("Sasuke"));
// Output: true
// false


// indexOf() - returns index of value
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
console.log(team.indexOf("Ichigo"));
// Output: 3


// sort - Used to sort array elements
// Alphabetical order
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
const result = team.sort();
console.log(result);
// Output: ["Goku", "Ichigo", "Luffy", "Naruto"]


// reverse() - Reverses the array order
const team = ["Naruto", "Luffy", "Goku"];
team.reverse();
console.log(team);
// Output: ["Goku", "Luffy", "Naruto"]


// Iteration Methods
// forEach() - It does NOT return a new array
const team = ["Naruto", "Luffy", "Goku", "Ichigo"];
team.forEach((hero) => {
  console.log(hero);
});
// Output:
// Naruto
// Luffy
// Goku
// Ichigo


//map() - used to transform each element in an array and return a new array.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled);
// Output: [2, 4, 6, 8]


// filter() - Used to filter based on condition
// Returns a NEW array
const result = team.filter((hero) => {
  return hero.length > 5;
});
console.log(result);
// Output: ["Naruto", "Luffy", "Ichigo"]


// reduce() - used to convert an array into a single value.
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(total);
// Output: 100


// Array Spread Operator - Unpack the array and spread its values
// copy an array
const team = ["Naruto", "Luffy", "Goku"];
const copyTeam = [...team];
console.log(copyTeam);
// Output: ["Naruto", "Luffy", "Goku"]


// Merge arrays
const team1 = ["Naruto", "Luffy"];
const team2 = ["Goku", "Ichigo"];
const allHeroes = [...team1, ...team2];
console.log(allHeroes);
// Output: ["Naruto", "Luffy", "Goku", "Ichigo"]