// 1st Challenge
// Make variables to represent what you had for breakfast, lunch and dinner yesterday, and log these to the console in a complete sentence
// Then update these further in your program to reflect what you will had/will have for breakfast, lunch, and dinner today and log in another complete sentence
console.log(`1st Challenge`);
console.log(``);

let varBreakfast = "Eggs";
let varLunch = "Chicken";
let varDinner = "Pasta";

console.log(`Yesterday I had the following for breakfast ${varBreakfast} then for lunch I had ${varLunch} then dinner was ${varDinner}`);

varBreakfast = "Sausage";
varLunch = "McDonalds";
varDinner = "KFC";

console.log(`Yesterday I had the following for breakfast ${varBreakfast} then for lunch I will have ${varLunch} then dinner was ${varDinner}`);

// If/Else
console.log(``);
console.log(`If/Else`);
console.log(``);


if(1 === "1"){
    console.log(`True`);
} else {
    console.log(`False`);
}

if(1 != "1"){
    console.log(`True`);
} else {
    console.log(`False`);
}

// Write an if statement that logs “Yes I can serve you” if age is greater than 17 and else logs “You aren’t old enough”
console.log(``);
console.log(`Write an if statement that logs “Yes I can serve you” if age is greater than 17 and else logs “You aren’t old enough”`);
console.log(``);

let varCheckAge = 17;

if(varCheckAge >= 17) {
    console.log(`Yes I can serve you`);
} else {
    console.log(`You aren't old enough`);
}

// Add a variable called country then check if age > 17 and country == "UK"
console.log(``);
console.log(`Add a variable called country then check if age > 17 and country == "UK"`);
console.log(``);

let varCountry = "USA";

if(varCheckAge >= 17 && varCountry == "UK") {
    console.log(`Yes I can serve you`);
} else {
    console.log(`You aren't old enough`);
}

/*
Challenge 1:
Create a variable called password.
Check how many letters are in the password, if there
are less than 8 log to the console that the password
is too short. Otherwise log the password to the
console.
*/
console.log(``);
console.log(`Challenge 1`);
console.log(``);

let varPassword ="password";

if(varPassword.length == 8) {
    console.log(`${varPassword}`);
} else {
    console.log(`Password is too short`)
}

/*
Challenge 2:
Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is log
“This number is divisible by 3 or 5” to the console.
Otherwise log “This number is not divisible by 3 or 5”.

Looked up at: https://stackoverflow.com/questions/2821006/find-if-variable-is-divisible-by-2
*/
console.log(``);
console.log(`Challenge 2`);
console.log(``);

let varNum = 15;
if(varNum % 3 === 0 && varNum % 5 === 0) {
    console.log(`This number is divisible by 3 or 5`);
} else {
    console.log(`This number is not divisible by 3 or 5`);
}

/*
Challenge 3:
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s
divisible by 5 log “buzz” to the console, if it’s divisible
by both 3 and 5 log “fizz buzz” to the console.
Otherwise log num to the console.
*/
console.log(``);
console.log(`Challenge 3`);
console.log(``);

if(varNum % 3 === 0 && varNum % 5 === 0) {
    console.log(`fizz buzz`);
} else {
        if(varNum % 3 === 0) {
            console.log(`fizz`);
        } else {
            console.log(`buzz`);
        }
}

/*
Challenge 4: Create a variable called time, a variable called placeOfWork and a variable called townOfHome. 
Create an if statement that logs to the console where someone is at times of the day. 
E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
*/
console.log(``);
console.log(`Challenge 4`);
console.log(``);

let varTime = 7;
let varPlaceOfWork = "X";
let varTownOfHome = "Y";

if(varTime == 7) {
    console.log(`I'm at home`);
} else {
    if(varTime == 8) {
        console.log(`I'm commuting`);
    } else {
        console.log(`I'm at work`);
    }
}

/*
Challenge 5: Create a variable called word that takes a string. 
Create an if statement that checks if the last letter is the same as the first. 
If it is return true, otherwise return false.
*/
console.log(``);
console.log(`Challenge 5`);
console.log(``);

let varWord = "kick";

if(varWord.charAt(0) == varWord.charAt(varWord.length-1)) {
    console.log(`True`);
} else {
    console.log(`False`);
}

/*
Challenge 6: Create two variables called num1 and num2. 
Create an if statement that checks if the result of the sum is even. 
If it is return the number, otherwise return the numbers multiplied together.
*/
console.log(``);
console.log(`Challenge 6`);
console.log(``);

let varNum1 = 5;
let varNum2 = 2;

if(varNum1 + varNum2 % 2 == 0) {
    console.log(`${varNum1 + varNum2}`);
} else {
    console.log(`${varNum1 * varNum2}`);
}

/*
Challenge 7: Create a variable called num. 
Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).
*/
console.log(``);
console.log(`Challenge 7`);
console.log(``);

let varNumPalindrome = 1221;
varNumPalindrome = varNumPalindrome + "";
let varReversedNumPalindrome = varNumPalindrome.split(``).reverse().join(``);
if(varNumPalindrome == varReversedNumPalindrome) {
    console.log(`True`);
} else {
    console.log(`False`);
}

/*
Challenge 8: Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
Find the index of a last vowel in the string.
*/
console.log(``);
console.log(`Challenge 8`);
console.log(``);

let varString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh";
// 94 letters, last vowel is at 89
let varIndex = 0;
let varVowelList = 'aeiouAEIOU';
  
for(var varCount = 0; varCount < varString.length ; varCount++) {
    if (varVowelList.indexOf(varString[varCount]) !== -1)
    {
        varIndex = varCount+1;
    }
    
}
console.log(`${varIndex}`);

/*
Lets go back to our noughts & crosses board

Write an if statement that checks if the items on the top row meet a winning condition.
So the top row are all 'o's or all 'x's
*/
console.log(``);
console.log(`o & x`);
console.log(``);

let varSpace1 = "x";
let varSpace2 = "x";
let varSpace3 = "o";

let varSpace4 = "x";
let varSpace5 = "x";
let varSpace6 = " ";

let varSpace7 = "o";
let varSpace8 = " ";
let varSpace9 = " ";


console.log(` ${varSpace1} | ${varSpace2} | ${varSpace3}`);
console.log(`------------`);
console.log(` ${varSpace4} | ${varSpace5} | ${varSpace6}`);
console.log(`------------`);
console.log(` ${varSpace7} | ${varSpace8} | ${varSpace9}`);

console.log(``);

if(varSpace1 == "x" && varSpace2 == "x" && varSpace3 == "x") {
    console.log(`Win`);
} else if(varSpace1 == "o" && varSpace2 == "o" && varSpace3 == "o") {
    console.log(`Win`);
} else {
    console.log(`Loss`);
}

/*
Write an if statement that checks the ages of cinema goers, and display the ticket prices:

- Child (below age of 18): £8
- Adult (18+): £10.95
- Senior (60+): £7.50

*/
console.log(``);
console.log(`Ticket Prices`);
console.log(``);

let varCinemaVisitorAge = 60;

if(varCinemaVisitorAge < 18) {
    console.log(`£8`);
} else if(varCinemaVisitorAge < 60) {
    console.log(`£10.95`);
} else {
    console.log(`£7.50`);
}

/*
Create a function that takes two parameters for a coffee order.
(size, type of drink)

*/
console.log(``);
console.log(`Coffee Order`);
console.log(``);

const funCoffeeOrder = (varDrinkOrderSize, varDrinkType) => {
    console.log(`${varDrinkOrderSize} ${varDrinkType}`);
}
funCoffeeOrder("Large","Latte");

/*
Think back to our earlier variables challenges. Can you write a function that takes name, 
age and favourite colour as parameters, and logs them to the console in a complete sentence?

*/
console.log(``);
console.log(`Name, Age & Colour`);
console.log(``);

const funNameAgeColour = (varName, varAge, varColour) => {
    console.log(`${varName} ${varAge} ${varColour}`);
}
funNameAgeColour("Dave","48","Red");

/*
Make a sandwich order function, with as many parameters as you like. 
Each parameter is a different filling. E.g. filling1, filling2 etc

*/
console.log(``);
console.log(`Sandwich Order`);
console.log(``);

const funSandwichOrder = (varFilling1, varFilling2, varFilling3) => {
    console.log(`${varFilling1} ${varFilling2} ${varFilling3}`);
}
funSandwichOrder("Tuna","Mayo","Cheese");
