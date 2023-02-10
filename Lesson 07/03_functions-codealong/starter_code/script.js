// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

// function squared(namingStuff) {
//     let mySquare = namingStuff * namingStuff;
//     return mySquare;
// }

let myNewVariable = 2;
console.log(myNewVariable);

myNewVariable = 2;
console.log(myNewVariable);

myNewVariable = myNewVariable + 3;
console.log(myNewVariable);


function squared(numberToBeSquared) {
        return numberToBeSquared * numberToBeSquared;

}


function decideRockPaperScissorWinner(player1, player2){
    let winner = "";

    // If player1 == player2
    if(player1 == player2){
        winner = "draw";
    }
    



    // Return either "p1" or "p2" or "draw"
    return winner;
}



console.log(squared(myNewVariable));

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5
console.log("LENGTH!");

function stringLength(toBeMeasured){
    return toBeMeasured.length;
}

console.log(stringLength("testing "))
console.log(stringLength("This is a longer string."))

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

console.log("ADDED!")

function addNumbers(ichi, ni){
    return ichi + ni;
}


function isSquareEven(ichi){

    // Square the number
    let theSquare= ichi * ichi;

    // if the square is even, return true
    if(theSquare % 2 == 0){
        return true;
    } else{
     // else return false
        return false;
    }

}


function multiplyNumbers(ichi, ni){
    return ichi * ni;
}

 console.log(addNumbers(4, 2));
 console.log(addNumbers(6, 3));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(personName){

    if(typeof personName == "string"){
        let theLength = stringLength(personName);

        console.log("Person's Name is " + theLength + " character(s) long");

        return "Hello, " + personName;
    }else{
        return "Goodbye";
    }
}

console.log(sayHello("Paul"));
console.log(sayHello(86));
console.log(sayHello(null));
console.log(sayHello(NaN));
console.log(sayHello());