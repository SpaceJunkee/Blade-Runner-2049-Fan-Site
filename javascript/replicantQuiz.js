//Keep track of position in Array
var arrayCount = 0;

//Get submit button
var submitButton = document.getElementById("submit");

//Create an array to hold the heart questions
var questions = [
    ["Can you feel it beat within?",
    "Is there anything in your body that makes you feel alive?",
    "Feel that space within your chest?",
    "Do you have what it takes to see this through?",
    "Did they grow it in a tube?",
    "Does it beat to the rhythm of the city?"]
]

//Get user choice paragraph
var paragraph = document.getElementById("questionPara");

//correct and second choice answers for heart questions
var correctAnswerHeart = document.getElementById("correctAnswer");
var secondChoiceHeart = document.getElementById("secondChoice");

correctAnswerHeart.addEventListener("click", changeQuestionHeart);
secondChoiceHeart.addEventListener("click", wrongAnswerHeart);

function changeQuestionHeart(event){
    if(typeof questions[0][arrayCount] !== "undefined"){
        paragraph.innerHTML = questions[0][arrayCount++];
    }else if(typeof questions[0][arrayCount] === "undefined"){
        $("#submit").removeClass("hide");
        $("#submit").addClass("show");
    }
    
    if(arrayCount === 5){
        secondChoiceHeart.style.visibility = "visible";                 
    }
    
    if(arrayCount === 6){
        secondChoiceHeart.firstChild.nodeValue = "Humanity";                 
    }
    
}

function wrongAnswerHeart(event){
    correctAnswerHeart.style.display = "none";
    secondChoiceHeart.style.display = "none";
    paragraph.innerHTML = "FAIL <br> Report to super for retirement."
}

//Handle submit button click
submitButton.addEventListener("click", nextSetOfQuestions);

function nextSetOfQuestions(){
    arrayCount = 0;
}



