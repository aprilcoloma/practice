var question = allQuestions.length,
	counter = question,
	qu =	allQuestions[0].question,
	btn = document.getElementById("submit-btn"),
	counter = 0,
	score = 0;


var allAnswers = function() {
	// var answer = allQuestions.question;

	for (var b = 0; b < allQuestions.length; b++) {
		// console.log(allQuestions[b].correctAnswer);

		var answerArray = [];
		answerArray.push(allQuestions[b].correctAnswer);
	}

	
}

allAnswers();

// console.log(question);
var qcounter = 0;

function displayQuestion() {
	var li = document.createElement("li"),
		ol = document.getElementsByTagName("ol")[0];

	ol.appendChild(li);

	label = document.createElement("label");
	label.innerHTML = allQuestions[qcounter++].question;
	li.appendChild(label);

	var choices = allQuestions[counter++].choices;
	
	for (var c = 0; c < choices.length; c++) {
		var input = document.createElement("input"),
			span = document.createElement("span"),
			val = 0;
			
		var choicesText = choices[c];
		input.type = "radio";
		input.name = "answerinput";
		span.innerHTML = choicesText;
		input.value = val + 1 + 1;
		li.appendChild(input);
		li.appendChild(span);

		console.log(input);
	}
}

window.onload = function() {
	displayQuestion();

}

btn.addEventListener("click", function() {
	displayQuestion();
});




