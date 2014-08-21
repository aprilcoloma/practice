var score = 0;

var questions = [
 	['How many moons does Earth have?', 1],
	['How many moons does Saturn have?',31],
	['How many moons does Venus have?', 0]
];

for (var i=0; i<questions.length; i++) {
	askQuestion(questions[i]);
}

function askQuestion(question) {
	var answer = prompt(question[0],'');

	if (answer == question[1]) {
        alert('Correct!');
        score++;
    } else {
        alert('Sorry. The correct answer is ' + question[1]);
    }
}