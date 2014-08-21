var pos = 0,
	question = null,
	questions = null,
	choice = null,
	choices = null,
	questionBlock = null,
	ch1, ch2, ch3,
	score = 0,
	btn = null,
	radios = null,
	correctAnswer = null,
	correctAnwers = null,
	formValid = false,
	selectedValue = null,
	li = null,
	ul = null,
	radiovalue = 0,
	count = 0,
	quizForm = null;
	


// fetch an element with the given ID
function getId(elemID) {
	return document.getElementById(elemID);
}

// display the question one of a time
function displayQuestion() {
	questionBlock = getId("questionBlock");
	quizForm = getId("quiz-form");
	quizForm.classList.remove("remove");
	
	question = allQuestions[pos].question;

	ul = document.createElement("ul");

	for (var c = 0; c < allQuestions[pos].choices.length; c++) {		
		li = document.createElement("li");
		li.innerHTML = "<input type='radio' name='choices' value=" +  c + ">" + allQuestions[pos].choices[c];
		ul.appendChild(li);
	}

	quizForm.innerHTML = "<label>" + question + "</label>";
	quizForm.appendChild(ul);
	quizForm.innerHTML += "<input type='button' id='btn' value='Submit'>";

	btn = getId("btn");
	btn.value = "next question";
	btn.classList.add("btn");
	btn.addEventListener("click", validateForm, false);

	questionBlock.appendChild(quizForm);
}


var tallyScore = function() {

	if (score == allQuestions.length-1) {
		questionBlock.innerHTML = "Perfect! You've got all question correct";
	} else {
		questionBlock.innerHTML = "Thank you for taking the quiz. You've got " + score + " correct answer(s) out of " +  (allQuestions.length-1) + " questions";
	}

	questionBlock.classList.add("result");
};

var validateForm = function() {
	
	choices = document.getElementsByName("choices");

	var i, formValid = false;

	for (i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			selectedValue = choices[i].value;
			formValid = true;
			validateAnswer();
		}
	}

	if (!formValid) {
		alert("Please select an option");
	}
}

var validateAnswer = function() {
	correctAnswer = allQuestions[pos].correctAnswer,
	questionLen = allQuestions.length;

	
	if (selectedValue == correctAnswer) {
		score++;
		pos++;
		displayQuestion();
	}

	else if (pos >= questionLen - 1) {
		tallyScore();
	} 

	else {
		pos++;
		displayQuestion();
	}

}


window.addEventListener("load", displayQuestion, false);
