const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function calculateGrade(marks) {
    if (marks >= 79 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks < 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks < 40) {
        return 'E';
    } else {
        return 'Invalid marks';
    }
}


rl.question("Enter student marks (between 0 and 100): ", function(inputMarks) {
    inputMarks = parseFloat(inputMarks);

    if (!isNaN(inputMarks) && inputMarks >= 0 && inputMarks <= 100) {

        const grade = calculateGrade(inputMarks);
        console.log(`Your Grade is: ${grade}`);
    } else {
        console.log("Invalid input. Marks should be between 0 and 100.");
    }
    
    rl.close();
});