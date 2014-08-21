
var quizForm 		= document.getElementById('quizForm'),
	totalQ	 		= allQuestions.length,
	ol		 		= document.getElementsByTagName('ol')[0],
	li 		 		= null,
	choices  		= null,
	eachChoice		= null,
	choicesLI  		= null,
	legend   		= null,
	choicesOL 		= null,
	input 			= null,
	label			= null,
	i  				= null,
	c  				= null,
	radioBtn		= null,
	submitAnswer 	= null,
	correctAnswer	= null,
	questionList 	= null,
	counter 		= 0,
	correctArr  	= [];

ol.classList.add("question-list");

for ( i = 0; i < totalQ; i++ ) {
		li = document.createElement('li');
		li.className = "question q-" + (i+1);
		choices =  allQuestions[i].choices;
		legend  =  document.createElement('legend');
		choicesOL = document.createElement('ol');
		legend.innerHTML = allQuestions[i].question;
		quizForm.appendChild(legend);

	for (c = 0; c < choices.length; c++) {
		input  = document.createElement('input');			// create inputs
		input.value = c;	
		input.type = "radio";
		input.name = "questionInput";
		input.id = "id";

		label   =  document.createElement('label');
		label.setAttribute("for", input.id);

		eachChoice = choices[c].split(",");
		label.innerHTML = eachChoice;

		choicesLI = document.createElement('li');
		choicesLI.className = "choice-item";

		choicesOL.appendChild(choicesLI);
		choicesOL.classList.add("choice-list");
		choicesLI.appendChild(input);
		choicesLI.insertBefore(label, input.nextSibling);

	}
	
	ol.appendChild(li);
	li.appendChild(legend);
	li.insertBefore(choicesOL, legend.nextSibling);

	if ( li.classList.contains("q-1") ) {
		li.classList.add("active");

		if ( li.classList.contains("active") ) {

			var btn = document.getElementById("submit-btn");

			// radioBtn = document.getElementsByClassName("choice-list")[0].getElementsByTagName("input");

			questionList = document.getElementsByClassName("question-list")[0];
			questionArray = questionList.children;
			var currentItem = questionArray[0];

			currentItem.addEventListener("click", function() {
				radioBtn = currentItem.getElementsByClassName("choice-list")[0].getElementsByTagName("input");

				
				var answerArray = [];
				var answercounter = 0;
				

				for (var j = 0; j < radioBtn.length; j++) {
					radioBtn[j].addEventListener("change", function() {
						// this.setAttribute("checked", "checked");

						if (this.checked) {
							console.log(true);
						}
					});

				}

				submitAnswer = function() {
					counter = counter + 1;
					// console.log(counter);
					questionList.children[counter-1].classList.remove("active");
					questionList.children[counter].classList.add("active");

					for (var e = 0; e < questionArray.length; e++) {
						if (questionArray[e].classList.contains("active")) {
							currentItem = questionArray[e];
							console.log(currentItem);						
						}
					}

					answercounter = answercounter + 1;
					// answerArray.push(answercounter);
					console.log("current counter: " + answercounter);

				}
				
				btn.addEventListener("click", submitAnswer, false);
				
			});



			
		}
	}
}













