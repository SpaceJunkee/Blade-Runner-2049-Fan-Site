var arrowJump = document.getElementById("arrowDown");

arrowJump.addEventListener('click', jumpToPosition);

var middlePageJump = document.getElementById("aboutPageFooter");

//Jump to position on page
function jumpToPosition(){
    middlePageJump.scrollIntoView({behavior: "smooth", block: 'center',inline: 'center'});
}




var i = 0;
var speed = 15; /* The speed/duration of the effect in milliseconds lower is faster */
var aboutArticle =  document.getElementById("aboutArticle");


$(window).on('load', typeWriter);
    
var txtIntro = "Hi! My name is Kevin.";

var txtFirstPara = "This is my fan project for the movie 'Blade Runner 2049'. The idea was to make a fictional website for the Wallace Corporation as seen in the movie. The site covers some events and themes that occur within the movies timeline and the aim was to give people a better insight into the world of Blade Runner.";

var txtSecondPara = "I used HTML, CSS & JavaScript to achieve the content, style and functionality of this website. With some help from other online fan sources and movie refrences I was able to piece together an authentic looking page with content that any fan of the movies can relate to.";

var txtThirdPara = "If you would like to check out some of my other work please vist https://github.com/spacejunkee or follow me on LinkedIn at https://www.linkedin.com/in/kevin-sandy-687ba519b/ or just use the cool side bar to the right.";

var txtFinalPara = "And with that I will leave you with the greatest quote in sci-fi movie history";

var txtQuote = "'I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser Gate. All those moments will be lost in time, like tears in rain.'"

function typeWriter() {
  if (i < txtIntro.length) {
    aboutArticle.innerHTML += txtIntro.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
      
  }else{
        aboutArticle.innerHTML += "<br><br>";  
        i = 0;
        typeWriterFirstPara(); 
  }
    
}


function typeWriterFirstPara(){
    if (i < txtFirstPara.length) {
        aboutArticle.innerHTML += txtFirstPara.charAt(i);
        i++;
        setTimeout(typeWriterFirstPara, speed);
      
    }else{
        aboutArticle.innerHTML += "<br><br>";  
        i = 0;
        typeWriterSecondPara();
    }
}


function typeWriterSecondPara(){
    if (i < txtSecondPara.length) {
        aboutArticle.innerHTML += txtSecondPara.charAt(i);
        i++;
        setTimeout(typeWriterSecondPara, speed);
      
    }else{
        aboutArticle.innerHTML += "<br><br>";  
        i = 0;
        typeWriterThirdPara();
    }
}

function typeWriterThirdPara(){
       if (i < txtThirdPara.length) {
        aboutArticle.innerHTML += txtThirdPara.charAt(i);
        i++;
        setTimeout(typeWriterThirdPara, speed);
      
    }else{
        aboutArticle.innerHTML += "<br><br>";  
        i = 0;
        typeWriterFinalPara();
    }
}

function typeWriterFinalPara(){
       if (i < txtFinalPara.length) {
        aboutArticle.innerHTML += txtFinalPara.charAt(i);
        i++;
        setTimeout(typeWriterFinalPara, speed);
      
    }else{
        aboutArticle.innerHTML += "<br><br>";  
        i = 0;
        typeWriterQuote();
    }
}

function typeWriterQuote(){
     if (i < txtQuote.length) {
        aboutArticle.innerHTML += txtQuote.charAt(i);
        i++;
        setTimeout(typeWriterQuote, speed);
      
    }else{
        aboutArticle.innerHTML += "<br><br>";  
        i = 0;
    }
}