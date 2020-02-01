var arrowJump = document.getElementById("arrowDown");

arrowJump.addEventListener('click', jumpToPosition);

var middlePageJump = document.getElementById("middlePageImage");

//Jump to position on page
function jumpToPosition(){
    middlePageJump.scrollIntoView({behavior: "smooth", block: 'center',inline: 'center'});
}



//SideBar Functionality specific to joipage

var closeButton = document.getElementById("closeButton");
var sideBar = document.getElementById("sideBarContainerJoi");

closeButton.addEventListener("click", closeSideBar);

sideBar.addEventListener("click", openSideBar);

function openSideBar() {
    sideBar.style.visibility = "hidden";
    document.getElementById("mySideBar").style.width = "80px";
    
}

function closeSideBar() {
    document.getElementById("mySideBar").style.width = "0";
    sideBar.style.visibility = "visible";
    
}

var purchase = document.getElementById("purchaseButton");

purchase.addEventListener("click", alertMessage);

function alertMessage(){
    var message = "Our servers are currently undergoing maintenance after a breach in security at our Los Angeles headquarters. Please be patient and try again later. Thanks."
    
    alert(message);
}



