var arrowJump = document.getElementById("arrow");


arrowJump.addEventListener('click', jumpToPosition);

//Jump to position on page
function jumpToPosition(){
    //.scrollIntoView({behavior: "smooth", block: 'center',inline: 'center'});
}


/*
//fade in modal depending on which image is clicked
function modalFade(event){
    if(event.target === flexImages1){
        $('#fadeDelay1').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
        });
    }else if(event.target === flexImages2){
        $('#fadeDelay2').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
        });
    }else{
        $('#fadeDelay3').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
        }); 
    }
}*/

//SideBar Functionality

var closeButton = document.getElementById("closeButton");
var sideBar = document.getElementById("sideBarContainer");

closeButton.addEventListener("click", closeSideBar);

sideBar.addEventListener("click", openSideBar);

function openSideBar() {
  document.getElementById("mySideBar").style.width = "80px";
}

function closeSideBar() {
  document.getElementById("mySideBar").style.width = "0";
}