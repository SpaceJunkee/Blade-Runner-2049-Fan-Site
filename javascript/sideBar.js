//SideBar Functionality

var closeButton = document.getElementById("closeButton");
var sideBar = document.getElementById("sideBarContainer");

closeButton.addEventListener("click", closeSideBar);

sideBar.addEventListener("click", openSideBar);

function openSideBar() {
    sideBar.style.visibility = "hidden";
    document.getElementById("mySideBar").style.width = "5%";
    
}

function closeSideBar() {
    document.getElementById("mySideBar").style.width = "0%";
    sideBar.style.visibility = "visible";
    
}