var slideIndex = 0;
var myTimer = setInterval(function() {
    showSlides(slideIndex);
}, 7000);

//showSlides(slideIndex);

var plus = function plusSlides(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        console.log("********PLUS*******");
        console.log(n);
        console.log(slideIndex + n);
        showSlides(slideIndex += n);
    }, 5000);
};

var current = function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        showSlides(slideIndex = n);
    }, 5000);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length-1}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    console.log("********SHOW*******");
    console.log(slideIndex-1);
    dots[slideIndex-1].className += " active";
    // setTimeout(function() {
    //     showSlides(slideIndex);
    // }, 5000); // Change image every 5 seconds
}
