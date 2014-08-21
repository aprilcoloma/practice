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
	selectedValue = null;
	


// fetch an element with the given ID
function getId(elemID) {
	return document.getElementById(elemID);
}

// display the question one of a time
function displayQuestion() {
	questionBlock = getId("questionBlock");
	
	question = allQuestions[pos].question;
	ch1 = allQuestions[pos].choices[0];
	ch2 = allQuestions[pos].choices[1];
	ch3 = allQuestions[pos].choices[2];

	questionBlock.innerHTML = "<label>" + question + "</label>";
	questionBlock.innerHTML += "<input type='radio' name='choices' value='0'>" + ch1;
	questionBlock.innerHTML += "<input type='radio' name='choices' value='1'>" + ch2;
	questionBlock.innerHTML += "<input type='radio' name='choices' value='2'>" + ch3;
	questionBlock.innerHTML += "<input type='button' id='btn' value='Submit'>";

	getId("btn").addEventListener("click", validateForm, false);
}


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
		// alert("Your answer is correct. Your current score is " + score);
		pos++;
		displayQuestion();
	}

	else if (pos >= questionLen - 1) {
		alert("Thank you for taking the quiz. Your final score is " + score);
	}

	else {
		pos++;
		displayQuestion();
	}


}


window.addEventListener("load", displayQuestion, false);
