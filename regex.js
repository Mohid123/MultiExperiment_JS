const regex = /Hello/; //note that its is case sensitive
console.log('FIRST', regex.test('Hello World'))

let pets = 'James has a pet cat';
let petRegex = /cat|dog|bird/; //match any of these
console.log('PETREG', petRegex.test(pets))

let codeCamp = 'freeCodeCamp';
let codeCampReg = /freecodecamp/i; //The i flag ignores the case sensitivity issue and matches just the string
console.log('CASEREG', codeCampReg.test(codeCamp))

// Extract matching word from the string

let extract = "Extract the word 'coding' from this string";
let exReg = /coding/;
console.log('EXTRACTREG', extract.match(exReg))

//Extract multiple matches

let multiExtract = "Repeat, Repeat, repeat";
let multiReg = /Repeat/ig //g is used to watch for every instance of the string occurrance
console.log('MULTIREGEX', multiExtract.match(multiReg))

// Wildcard period matching

let wildStr = "I hummed and hugged";
let wildReg = /hu./g; // . is going to match all charatcers after the specified string i.e. hu in this case
console.log('WILDREG', wildStr.match(wildReg))

// predefined string character matching

let preStr = "Beware of bugs in the above code because we have a big problem";
let preReg = /b[aeiou]g/g;
console.log('PREREG', preStr.match(preReg))

//match all letters from a-z
let alphaStr = "The quick brown fox jumps over the lazy dog";
let alphaReg = /[a-z]/ig; // for numbers just add 0-9 in the braces. Bothe can be used together e.g. [a-z0-9]
console.log(alphaStr.match(alphaReg))

// negated charatcer sets

let negStr = "3 blind mice"; //match all characters except numbers and vowels
let negReg = /[^0-9aeiou]/g; //^ prevents specified charatcers from mathcing
console.log('NEGATEREG', negStr.match(negReg))

//match characters occuring more than once

let multiChar = "Mississippi";
let MultiCharReg = /s+/g;
//the + will check for every occurance of the character. A * on the other hand matches a charatcer that occurs 0 or more times and return that string
console.log('MULTICHARREG', multiChar.match(MultiCharReg))

// greedy or lazy matching

let greedStr = 'titanic';
let greedReg = /t[a-z]*i/;
console.log("GREEDREG", greedStr.match(greedReg)) //titani

let greedStrA = 'titanic';
let greedRegA = /t[a-z]*?i/;// the ? allows the lazy match functionality
console.log("GREEDREG", greedStrA.match(greedRegA)) //ti

//HTML matching

let htmlStr = '<h1>Suna Jani</h1>';
let htmlReg = /<.*>/; // * for 0 or more occurances
console.log('HTMLREG', htmlStr.match(htmlReg)) //returns entire string

let htmlStrA = '<h1>Suna Jani</h1>';
let htmlRegA = /<.*?>/; // * for 0 or more occurances
console.log('HTMLREG', htmlStrA.match(htmlRegA)) //returns just the <h1> tag


// TASK
// Find the criminals represented by C

let crimeStr = 'P1P2P3P4CCCP5P6';
let crimeReg = /c/ig; // this will work fine but it will return the C's seperately.
console.log('CRIMINALS', crimeStr.match(crimeReg));

// To return all C's togther
let crimeRegB = /c+/i;
console.log('ALLCRIMINALSTOGETHER', crimeStr.match(crimeRegB))

// Match the beginning of string

let beginStr = "calcifer is a good calculator";
let beginReg = /^cal/ig;// the ^ will match the first occurance
console.log('BEGINMATCHONLYSTR', beginStr.match(beginReg)) // will return only the first occurance of the specified regex string and ignore others
console.log('STATUS', beginReg.test(beginStr))


// Match the end of string

let endStr = 'The last train on the train';
let endReg = /train$/; //the dollar sign matche the last occurance of the string
console.log('ENDREGEX', endStr.match(endReg))
console.log('ENDREGEXStatus', endReg.test(endStr)) //will return true or false based on whether the provided pattern is at the end of the string

//Shorthand way of matching any letter, numbers and underscore

let divStr = 'My age is 290 and my designation is _MoHiD.';
let shortHandReg = /\w/g; // \w will match all letters and numbers etc.
console.log('SHORTHANDREG', divStr.match(shortHandReg))
console.log('SHORTHANDREG', divStr.match(shortHandReg).length) //length of the string

//Match everything EXCEPT the numbers and alphabets

let divStrA = 'My age is 290 and my designation is _MoHiD.';
let shortHandRegA = /\W/g; // \W will match everyting except numbers and letters. (.,| etc.)
console.log('SHORTHANDREG', divStrA.match(shortHandRegA))
console.log('SHORTHANDREG', divStrA.match(shortHandRegA).length) //length of the string

//Shorthand match all numbers only

let numStr = "The price is 20.000 rupees";
let numReg = /\d/g; //\d will match all numbers
console.log('NUMMATCHREG', numStr.match(numReg))

//Match all Non numbers

let nonNumStr = 'The price is 20.000 rupees';
let numRegB = /\D/g; //\D will match all non numbers
console.log('NUMMATCHREG', nonNumStr.match(numRegB))

//TASK
//usenrame validator
// Criteria:
// must have length > 2
// must have one uppercase letter

let username = "JacK101";
let usernameB = "111JacK101";
let usernameValidator = /^[A-Za-z]{2,}\d*$/;
console.log('USERNAMEVALIDATOR for Jack101', usernameValidator.test(username))
console.log('USERNAMEVALIDATOR for 111JacK101', usernameValidator.test(usernameB))
// {} specifies the number of matches. e.g. {2,} means that there must be at least two matches and can lead upto infinite
// {2, 4} means that there must be atleast 2 matches and no more than 4

// Whitespace matches

let spaced = "My Name is kha n";
let spaceReg = /\s/g;// you can also write /\s+/;
console.log('WHITESPACEMATCH', spaced.match(spaceReg).length)

// For non-white space matches just use \S

//Conditional number of matching between higher and lower

let oh = "Ohhhhhh No";
let ohReg = /oh{3,6}/ig; // this means that if there are at least 3 and at most 6 h's after the character
console.log('CoNDITIONALREG', oh.match(ohReg)) //return all number of h's based on condition

// For exact number of matches only give one number inside the {} braces

//Check for all or none

let allStr = 'favorite';
let allReg = /favou?rite/; // ?  will optionally look for the letter specified, in this case u
console.log('ALLREG', allStr.match(allReg))

// Positive and Negative lookahaeds

// Positive

let qt = 'QuaidTech';
let lookAheadReg = /Quaid(?=Tech)/; // (?=Tech) will check if there is Tech after Quiad and only then return value
console.log('POSITIVELOOKAHEAD', lookAheadReg.test(qt))

// Negative

let qtA = 'QuaidTecs';
let lookAheadRegA = /Quaid(?!Tech)/; // (?!Tech) will check if there is NO Tech after Quiad and only then return value
console.log('POSITIVELOOKAHEAD', lookAheadRegA.test(qtA))

// TASK
// CHECK IF PASSWORD IS ATLEAST 5 CHARACTERS AND HAS TWO CONSECUTIVE DIGITS FOLLOWED (total 7 or more);

let password = "Abcde12f32";
let passwordA = "Ab";
let passReg = /(?=\w{5})(?=\d{2})/;
console.log('PASSREG', passReg.test(password))
console.log('PASSREGA', passReg.test(passwordA))

// reuse patterns

let regie = "Regex regex good";
let regReg = /(\w+)\s\1/i; // The \s means a space and \1 means the same string must repeat once;
console.log('REUSEREG', regReg.test(regie))


//TASK
//Remove white space from start and end without using trim()

let final = "   Hi There!  ";
let regexFinal = /^\s+|\s+$/g;
console.log('FINAL', final.replace(regexFinal, ''))


//SUMMARY

//The i flag ignores the case sensitivity issue and matches just the string
// g is used to watch for every instance of the string occurrance
// . is going to match all charatcers after the specified string i.e. hu in this case
// for numbers/alphabets just add 0-9 or a-z in the braces. Bothe can be used together e.g. [a-z0-9]
// ^ prevents specified charatcers from matching and checks at beginning of string
// $ matches the last occurance of the string and checks at the end
// \w will match all letters and numbers etc.
// \W will match everyting except numbers and letters. (.,| etc.)
// \d will match all numbers
// \D will match all non numbers
// {} specifies the number of matches. e.g. {2,} means that there must be at least two matches and can lead upto infinite
// {2, 4} means that there must be atleast 2 matches and no more than 4
// \s is for checking/mathcing whitespace occurance
// ?  will optionally look for the letter specified.
// (?=YOUR_STRING) will check if there is YOUR_STRING after an initial provided string and only then return the value
// \1 means a repeated occurance of a string or pattern provided
// (?!YOUR_STRING) will check if there is No YOUR_STRING after an initial provided string and only then return the value