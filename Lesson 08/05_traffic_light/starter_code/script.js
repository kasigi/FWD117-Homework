// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// Styles Approach

// Function to turn all lights off
function turnOff(){

    // Turn off red - remove on class
    document.querySelector("#stopLight").classList.remove("potato");

    // Turn off green - remove on class
    document.querySelector("#goLight").classList.remove("potato");

    // Turn off yellow - remove on class
    document.querySelector("#slowLight").classList.remove("potato");

}

function goLight(){

    // Turn All Lights Off
    turnOff();

    // Turn Go Light On
    document.querySelector("#goLight").classList.add("potato");
}


// Click event - green light
document.querySelector("#goButton").addEventListener('click',goLight);


// Click event - yellow light
document.querySelector("#slowButton").addEventListener('click',function(){
    // Turn all off
    turnOff();

    // Turn on yellow by adding on class
    document.querySelector("#slowLight").classList.add("potato");
});

// Click event - red light
document.querySelector("#stopButton").addEventListener('click',function(){
    // Turn all off
    turnOff();

    // Turn on red by adding on class
    document.querySelector("#stopLight").classList.add("potato");
});