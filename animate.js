let mainText = document.querySelector("h2");

window.addEventListener("scroll", function(){
    let value= window.scrollY;


    if(value>300){
      mainText.style.animation="slider 2s ease-out forwards";
    }
    if((value<=0) || (value>700)){
      mainText.style.animation="disappear 2s ease-out forwards";
    }
});
