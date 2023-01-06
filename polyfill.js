// A poly fill is a piece of code that acts as cross browser support.
// here we will make a polyfill for a forEach loop

const arr = [1,2,3,4,5,6];

// Now let's assume that there is no support for forEach We can do this by removing it manually for testing purposes

Array.prototype.forEach = null;

// arr.forEach((val) => {
//     console.log(val * 2)
// })

// So now we will write our polyfill
// In order for us to create a polyfill we need to understand how the forEach works
// We know that it takes a callback and loops thorugh each element
// First we check for compatibility
if(!Array.prototype.forEach) {
    // polyfill code goes here
    Array.prototype.forEach = function(callBackFn) {
        for (let val of this) { // "this" includes our array
            callBackFn(val)
        }
    }
}

arr.forEach((val) => {
    console.log(val * 2)
})

// bind method polyfill

// Normal Bind method implementation
let user = {
    firstName: "Vladimir",
    lastName: "Lenin"
}

let fName = function fullname(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + ", " + homeTown + ", " + state)
}

let printMyName = fName.bind(user, "Leningrad", "USSR") // This is also a function

printMyName();

// custom polyfill bind
// Function.prototype.customBind makes our custom method accessible globally to JS
// Bind works by recieving an object and invoking a function. that means we will return a function
Function.prototype.customBind = function (...args) {
    let obj = this;
        params = args.slice(1)
    return function() { //bind function
        obj.apply(args[0], params)
    }
}

let printMyName2 = fName.customBind(user, "Leningrad", "USSR")
printMyName2();
