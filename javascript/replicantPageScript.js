var arrowJump = document.getElementById("arrowDown");

arrowJump.addEventListener('click', jumpToPosition);

var middlePageJump = document.getElementById("questionPara");

//Jump to position on page
function jumpToPosition(){
    middlePageJump.scrollIntoView({behavior: "smooth", block: 'center',inline: 'center'});
}


