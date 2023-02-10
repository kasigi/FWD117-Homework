// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// Styles Approach

// Function to turn all lights off
function turnOff(){
    // Turn off red - remove on class
    document.querySelector("#stopLight").classList.remove("on");

    // Turn off green - remove on class
    document.querySelector("#goLight").classList.remove("on");

    // Turn off yellow - remove on class
    document.querySelector("#slowLight").classList.remove("on");

}

// Click event - green light
document.querySelector("#goButton").addEventListener('click',function(){
    // Turn all off
    turnOff();

    // Turn on green by adding on class
    document.querySelector("#goLight").classList.add("on");
});


// Click event - yellow light
document.querySelector("#slowButton").addEventListener('click',function(){
    // Turn all off
    turnOff();

    // Turn on yellow by adding on class
    document.querySelector("#slowLight").classList.add("on");
});

// Click event - red light
document.querySelector("#stopButton").addEventListener('click',function(){
    // Turn all off
    turnOff();

    // Turn on red by adding on class
    document.querySelector("#stopLight").classList.add("on");
});