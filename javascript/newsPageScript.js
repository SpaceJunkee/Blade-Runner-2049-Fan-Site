var arrowJump = document.getElementById("arrowDown");

arrowJump.addEventListener('click', jumpToPosition);

var middlePageJump = document.getElementById("middlePageImage");

//Jump to position on page
function jumpToPosition(){
    middlePageJump.scrollIntoView({behavior: "smooth", block: 'center',inline: 'center'});
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
