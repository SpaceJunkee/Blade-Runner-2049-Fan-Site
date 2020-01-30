//Keep track of position in Array
var arrayCountInner = 0;
var arrayCountOuter = 0;

//Get submit button
var submitButton = document.getElementById("submit");

//Get user choice paragraph
var paragraph = document.getElementById("questionPara");

//correct and second choice answers for heart questions
var correctAnswer = document.getElementById("correctAnswer");
var wrongAnswer = document.getElementById("wrongAnswer");



//Begin questions 
var beginTestButton = document.getElementById("testButton");
    
beginTestButton.addEventListener("click", beginTest);
beginTestButton.addEventListener("click", jumpToPosition);

function beginTest(event){
    
    $("#replicantFlexContainer").removeClass("show");
    $("#replicantFlexContainer").addClass("hideAnim");
    $(".questionContainer").removeClass("hide");
    $(".questionContainer").addClass("show");
    
    correctAnswer.addEventListener("click", changeQuestion);
    wrongAnswer.addEventListener("click", wrongAnswerFunction);
}


//Create an array to hold the heart questions
var questions = [
    [
        "Can you feel it beat within?",
        "Is there anything in your body that makes you feel alive?",
        "Feel that space within your chest?",
        "Do you have what it takes to see this through?",
        "Did they grow it in a tube?",
        "Does it beat to the rhythm of the city?",
        //forsaken
        "<strong>Forsaken.<strong>",
        "Have we forsaken you?",
        "Do you stand on the outside looking in?",
        "Are you all alone when you’re performing your duties?",
        "Have you ever looked inside yourself?",
        "Do you feel forgotten?"       
    ]
   
]


function changeQuestion(){
    if(typeof questions[arrayCountOuter][arrayCountInner] !== "undefined"){
        paragraph.innerHTML = questions[arrayCountOuter][arrayCountInner++];
    }else if(typeof questions[arrayCountOuter][arrayCountInner] === "undefined"){
        $("#submit").removeClass("hide");
        $("#submit").addClass("show");
    }
    
    if(arrayCountInner === 5){
        wrongAnswer.style.visibility = "visible";                 
    }
    
    if(arrayCountInner === 6){
        wrongAnswer.firstChild.nodeValue = "Humanity";                 
    }
    
    if(arrayCountInner === 7){
        wrongAnswer.style.visibility = "hidden";                 
    }
    
    if(arrayCountInner === 10){
        wrongAnswer.style.visibility = "visible";
        wrongAnswer.firstChild.nodeValue = "Desolate";                  
    }
    
}


//------------------------------------------------

//Handle wrong answer button
function wrongAnswerFunction(event){
    correctAnswer.style.display = "none";
    wrongAnswer.style.display = "none";
    paragraph.innerHTML = "FAIL <br> Report to super for retirement."
}


//Handle submit button click
submitButton.addEventListener("click", finish);

function finish(){
    
}



