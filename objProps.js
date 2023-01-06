let name = {
    firstName: 'Joseph',
    lastName: 'Stalin',
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

name.printFullName();

let name2 = {
    firstName: 'Leon',
    lastName: 'Trotsky'
}

// here we can use the call method to borrow the function from name to name2 instead of rewriting

// function borrowing
name.printFullName.call(name2) // name 2 borrows printFullName from name

// Same can be done for a function outside of object

let name3 = {
    firstName: 'Rosa',
    lastName: 'Luxembourg'
}

let printFullName = function (country) {
    console.log(this.firstName + " " + this.lastName + " from " + country)
}

printFullName.call(name3, "Germany")

// Now if we want to pass multiple parameters inside this then we can use apply.
// We can also use call but apply takes an array and makes it easier

// apply
let name4 = {
    firstName: "Anton",
    lastName: "Paenokoek"
}

function printNameWithCountry(country, affilitaion) {
    console.log(this.firstName + " " + this.lastName + " from " + country + ". He is a renowned " + affilitaion)
}

printNameWithCountry.apply(name4, ['Germany', "Marxist"])

// bind binds the function to the object and returns a copy of the method. It does not take array as argument

let name5 = {
    firstName: "Vladimir",
    lastName: "Lenin"
}

function printNameWithCountry(country, affilitaion) {
    console.log(this.firstName + " " + this.lastName + " from " + country + ". He is the founder of " + affilitaion)
}

let res = printNameWithCountry.bind(name5, 'USSR', "Marxism-Leninism") //Note that this will not console the result
// we need to invoke it to get a result. If we console res we will see a function

console.log(res)
res();

// bind is not invoked directly and apply is invoked directly.
 
