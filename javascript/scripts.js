var arrowJump = document.getElementById("arrow");
var flexImages = document.getElementById("flexImages");

arrowJump.addEventListener('click', jumpToPosition);

function jumpToPosition(){
    flexImages.scrollIntoView({behavior: "smooth"});
}

flexImages.addEventListener('click', modalFade)

function modalFade(){
    $('#fadeDelay').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
    });
}

