var arrowJump = document.getElementById("arrowDown");

arrowJump.addEventListener('click', jumpToPosition);

var middlePageJump = document.getElementById("questionPara");

//Jump to position on page
function jumpToPosition(){
    middlePageJump.scrollIntoView({behavior: "smooth", block: 'center',inline: 'center'});
}


//Begin questions 
var beginTestButton = document.getElementById("testButton");
    
beginTestButton.addEventListener("click", beginTest);
beginTestButton.addEventListener("click", jumpToPosition);

function beginTest(event){
    
    $("#replicantFlexContainer").removeClass("show");
    $("#replicantFlexContainer").addClass("hideAnim");
    
    $("#submit").removeClass("hide");
    $("#submit").addClass("show");
    $(".questionContainer").removeClass("hide");
    $(".questionContainer").addClass("show");
    
}