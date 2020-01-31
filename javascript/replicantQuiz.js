//Keep track of position in Array
var arrayCount = 0;

//Get submit button
var submitButton = document.getElementById("submit");

//Get user choice paragraph
var paragraph = document.getElementById("questionPara");

//correct and second choice answers for heart questions
var correctAnswer = document.getElementById("correctAnswer");

//Begin questions 
var beginTestButton = document.getElementById("testButton");
    
beginTestButton.addEventListener("click", beginTest);
beginTestButton.addEventListener("click", jumpToPosition);

function beginTest(){
    
    $("#replicantFlexContainer").removeClass("show");
    $("#replicantFlexContainer").addClass("hideAnim");
    $(".questionContainer").removeClass("hide");
    $(".questionContainer").addClass("show");
    $("#finished").css("display", "none");
    
    
    correctAnswer.addEventListener("click", changeQuestion);
    
    loadJson("https://api.myjson.com/bins/1gfd0y", null, populateQuestionSet);
}

//Load JSON baseline Questions api           
function loadJson(url, questions, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);

	xhr.onload = function() {
		callback( JSON.parse(xhr.responseText) );
	}

	xhr.send( JSON.stringify(questions));
}


function populateQuestionSet(questions){
    console.log(questions);
    questionSet = (questions[Math.floor(Math.random() * 11)]);
   
}

//Create a 2d array to hold the baseline questions
var questionSet = [];


//Create an array to hold the baseline answers
var answerSet = ["System", "Cells", "Interlinked", "Within", "Stem", "Dreadfully", "Distinct", "Dark", "Against the Dark", "Fountain", "White Fountain"];
        

//-------------------------------------------------------------------------------------
function changeQuestion(){
    changeAnswer();
    
    if(arrayCount === questionSet.length){
        $("#submit").removeClass("hide");
        $("#submit").addClass("show");
        $("#correctAnswer").css("display", "none");
        $("#questionPara").css("display", "none");
        $("#finished").css("display", "block");
        $("#finished").removeClass("hide");
        $("#finished").addClass("show");
    }
    
    paragraph.innerHTML = questionSet[arrayCount];
   
    correctAnswer.innerHTML = answerChange;
    
    arrayCount++;
    
    
}

var answerChange;

function changeAnswer(){
    if(questionSet[0] == "System."){
        answerChange = answerSet[0];
    }else if(questionSet[0] == "Cells."){
        answerChange = answerSet[1];
    }else if(questionSet[0] == "Interlinked."){
        answerChange = answerSet[2];
    }else if(questionSet[0] == "Within."){
        answerChange = answerSet[3];
    }else if(questionSet[0] == "Stem."){
        answerChange = answerSet[4];
    }else if(questionSet[0] == "Dreadfully."){
        answerChange = answerSet[5];
    }else if(questionSet[0] == "Distinct."){
        answerChange = answerSet[6];
    }else if(questionSet[0] == "Dark."){
        answerChange = answerSet[7];
    }else if(questionSet[0] == "Against the dark."){
        answerChange = answerSet[8];
    }else if(questionSet[0] == "Fountain."){
        answerChange = answerSet[9];
    }else if(questionSet[0] == "White Fountain."){
        answerChange = answerSet[10];
    }
}


//------------------------------------------------

//Handle submit button click
submitButton.addEventListener("click", finish);

function finish(){
  
    $("#finished").text('"A Tall White Fountain. A blood black nothingness. A system of cells. Within cells interlinked. Within one stem. And dreadfully distinct. Against the dark. A tall white fountain played."');
    
}



