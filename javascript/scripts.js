var arrowJump = document.getElementById("arrow");
var flexImages = document.getElementById("flexImages");

arrowJump.addEventListener('click', jumpToPosition);

function jumpToPosition(){
    flexImages.scrollIntoView({behavior: "smooth"});
}