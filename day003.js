// Challenge 1 change below to arrow function syntax
console.log(``);
console.log(`Challenge 1`);
console.log(``);
function factorial (n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(33));

// Challenge 1 answer
console.log(``);
console.log(`Challenge 1 answer`);
console.log(``);
const funFactorial = (varIn) => {
    if ((varIn === 0) || (varIn === 1)) {
        return 1;
    } else {
        return (varIn * factorial(varIn - 1));
    }
}

console.log(funFactorial(33));

// Activity 1 
console.log(``);
console.log(`Activity 1`);
console.log(``);
let varRunning = 1;

const takeOrder = (topping1, topping2) => {  
    console.log(`Order ${varRunning} is a pizza with ${topping1} & ${topping2}`);
    varRunning++;
}

takeOrder("Pineapple", "Ham");
takeOrder("Pineapple", "Ham");
takeOrder("Pineapple", "Ham");

// Activity 2
console.log(``);
console.log(`Activity 2`);
console.log(``);
let varPin = 12345678;
let varBalance = 100;

const funCashMachine = (varEnteredPin, varWithdrawlAmount) => {
    if(varEnteredPin == varPin) {
        // console.log(`Right Pin`);
        if(varWithdrawlAmount <= varBalance) {
            console.log(`Withdrawl Approved`);
        } else {
            console.log(`Insufficient Funds`);
        }
    } else {
        console.log(`Wrong Pin`);
    }
}

funCashMachine(12345678, 100);

// Activity 3
console.log(``);
console.log(`Activity 3`);
console.log(``);

const funSubtract = (varOne, varTwo) => {
    console.log(varOne - varTwo);
}
funSubtract(2,2);

const funDivide = (varOne, varTwo) => {
    console.log(varOne / varTwo);
}
funDivide(2,2);

// Activity 4
console.log(``);
console.log(`Activity 4`);
console.log(``);
let arrFavoriteSongs = [
    "A",
    "B",
    "C",
]

arrFavoriteSongs[1] = "D";
arrFavoriteSongs[3] = "D";
arrFavoriteSongs.push("Push");
console.log(arrFavoriteSongs);
console.log(arrFavoriteSongs[2]);
console.log(arrFavoriteSongs.length);
arrFavoriteSongs.pop();
console.log(arrFavoriteSongs);

// Activity 5
console.log(``);
console.log(`Activity 5 Favorite Websites`);
console.log(``);
let arrFavoriteWebsites = [
    "1",
    "2",
    "3",
]
console.log(arrFavoriteWebsites);
arrFavoriteWebsites.push("4");
console.log(arrFavoriteWebsites);
arrFavoriteWebsites.push("5");
console.log(arrFavoriteWebsites);
arrFavoriteWebsites.pop();
console.log(arrFavoriteWebsites);

// Activity 6
console.log(``);
console.log(`Activity 6 Research`);
console.log(``);

/*
Array Methods
Method	Description
concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
forEach()	Calls a function for each array element
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array
*/

/* shift() unshift() slice() splice()
shift()	Removes the first element of an array, and returns that element
unshift()	Adds new elements to the beginning of an array, and returns the new length
slice()	Selects a part of an array, and returns the new array
splice()	Adds/Removes elements from an array
*/

let arrMethods = [
    "0",
    "1",
    "2",
    "3"
]

console.log(arrMethods);
console.log(arrMethods.shift());
console.log(arrMethods);
console.log(arrMethods.unshift("A"));
console.log(arrMethods);
console.log(arrMethods.slice(1,3));
console.log(arrMethods);
console.log(arrMethods.splice(0,2));
console.log(arrMethods);
console.log(Array.isArray(arrMethods));
console.log(arrMethods);
console.log(arrMethods.toString());
console.log(arrMethods);

// Activity 7

