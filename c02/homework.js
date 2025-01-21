// zadaca1:
//a)

let globalNum=10;
function checkScope() {
    console.log(globalNum);
}

// b)
let globalNum=10;
function checkScope() {
    let localNum=globalNum;
    console.log(globalNum === localNum);
}

//v)

if (true) {
    let blockNum=10;

}
console.log(typeof blockNum);

//zadaca 2
let score = 78;

if (score >= 90 &&
score <= 100) {
console. log ("Grade: A");
} else if (score >= 80 &&
score <= 89) {
console.1og ("Grade: B");
} else if (score >= 70 &&
score <= 79) 4
console. log ("Grade: C");
} else if (score >= 60 &&
score <= 69) {
console. log ("Grade: D");
¿ else if (score >= 0 && score <= 59) {
console. log ("Grade: F");
｝ else｛
console. log("Invalid score! Please enter a score between 0 and 100.");
}

// b)

let dayNumber = 2;

switch
(dayNumber) {
case 1:
console.log ("The day is Sunday."); break;
case 2:
console.log( "The day is Monday."); break;
case 3:
console.log ("The day is Tuesday."); break;
case 4:
console.log ("The day is Wednesday."); break;
case 5:
console.log ("The day is Thursday."); break;
case 6:
console.log("The day is Friday."); break;
case 7:
console.log ("The day is Saturday."); break; default:
console.log ("Invalid day number. Please enter a number between 1 and 7.");
}

//zadaca 3
function sumThreeNumers(num1, num2, num3){
    return num1+ num2 + num3;
}


function returnSameString(str) {
    return str;
}


function compareNumbers(num1, num2){
    if(num1 === num2){
        console.log("Three numbers are equal");
    }else {
        console.log("Three numbers are not equal");
    }
}

//zadaca 4

//a)
let age = 20;

if(age>=21) {
    console.log("You can buy alcohol and vote.");
}else if (age>=18){
    console.log("You can vote, buy you cannot buy alcohol.");
}else {
    console.log("You cannot buy alcohol or vote.");
}

//b)
function getDaysInMonth(month) {
    
    month = month. toLowerCase ();
    
    switch (month) {
    case "january":
    case "march":
    case"may":
    case"july":
    case"august":
    case"october":
    case "december":
    return 31;
    case "april":
     case "june":
    case"september": 
    case "november":
    return 30; 
    case "february":
    return 28;
    
    default:
    console.10g ("Invalid input");
    return; 
    }
    }
    
    console.log (getDaysInMonth ("June"));
    console.1og (getDaysInMonth ("February"));
    console.1og(getDaysInMonth ("December"));
    console.log(getDaysInMonth("InvalidMonth"));

    //v)
    let temperature = 25;
    if (temperature >30) {
        console.log("It's hot outside.");
    }else if (temperature>20) {
        console.log("It's warm outside.");
    }else if (temperature >=15){
        console.log("The weather is moderate.");
    }else {
        console.log("It's cold outside.");
    }

    //zadaca 5
    function fizzBuzz (number) {
        
        if (number % 3=== 0 && number % 5 === 0) {
        console.log ("FizzBuzz");
        
        ｝
        
        else if (number % 3 === 0) {
        console.log ("Fizz");
        }
       
        else if (number % 5 === 0) {
        console.log ("Buzz");
        
        ｛
        
        else {
        console.log (number);
        }
        }