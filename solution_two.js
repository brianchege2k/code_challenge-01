
// readline module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function calculateDemeritPoints using if else control statement
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
        return demeritPoints;
    }
}
//creating input,outut interface
rl.question("Enter the speed of the car: ", function(speed) {
    speed = parseInt(speed);
    if (!isNaN(speed)) {
        calculateDemeritPoints(speed);
    } else {
        console.log("Invalid input. Please enter a number.");
    }
    rl.close();
});
