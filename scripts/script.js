function burgerMenu(){
    var checkbox = document.getElementById("hamburgerCheckbox");
    var menu = document.getElementById("menu");
    var burgerMenu = document.getElementsByClassName("hamburgerMenu");

    if(checkbox.checked == true){
        menu.style.transform = "none";
        burgerMenu[0].style.position = "fixed";
    }
    else{
        menu.style.transform = "translate(200px)";
        burgerMenu[0].style.position = "absolute";
    }
}



function scrollToDiv(location){
    document.getElementById(location).scrollIntoView({behaviour: "smooth"});

}



//scroll events still trigger on button clicks, not manual scrolling (any scrolling of any event)
document.getElementById("imageContainer").addEventListener("scroll", scrollEvent);

function changeIndex(direction){

    var currentIndex = getCurrentIndex()
    //current spot +- 1 depending on button clicked
    nextIndex = currentIndex + direction;
    if(nextIndex == -1){
        nextIndex = 4;
    }
    else if(nextIndex == 5){
        nextIndex = 0;
    }
   
    var nextDestination = document.getElementById("image"+ (nextIndex)); 
    nextDestination.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});

}
function getCurrentIndex(){
    scrollContainer = document.getElementById("imageContainer");
    var indicies = scrollContainer.getElementsByClassName("image");

    var positionInContainer = scrollContainer.scrollLeft;
    var widthOfTestimonial = indicies[0].offsetWidth; //all same width
    var currentIndex = Math.floor(positionInContainer / widthOfTestimonial);
    //If you add too much padding, it may get the wrong index if you add a lot of elements

    return currentIndex;
}

//cant put this in the scroll event listener for some reason
function scrollEvent(){
    changeCircleColor(getCurrentIndex())
}
function changeCircleColor(currentIndex){
  
    for(i = 0; i <= 4; i+=1){
        var circle = document.getElementById("circle"+i)
        if(currentIndex == i){
            circle.style.backgroundColor = "#6F91EB"
        }
        else{
            circle.style.backgroundColor = "#4862A4"
        }
    }
    if(currentIndex > 4){
        document.getElementById("circle4").style.backgroundColor = "#6F91EB";
    }
}