var slideIndex = 1;
var slideTimeout;
// Display the first slide on startup
showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}

var myTimer = setInterval(nextSlide, 5000);


function plusSlides(n) {
    showSlides(slideIndex += n);
    clearInterval(myTimer);
    document.getElementById("slideDisplay").classList.remove("fade");
    document.getElementById("slideDisplay").classList.remove("fadeOut");
    clearTimeout(slideTimeout);
    myTimer = setInterval(nextSlide, 5000);
}

var current = function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    var currSlide = document.getElementById("slideDisplay");
    // TODO slides as a number are currently hardcoded in. Obviously this isn't ideal. Get it to read the slides file isntead.
    var slideCount = 11;
    // var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n >= slideCount) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slideCount;
    }
    // for (i = 0; i < slideCount; i++) {
    //    // slides[i].style.display = "none";
    // }
    currSlide.style.backgroundImage = "url(./images/slideshow/img" + slideIndex + ".jpg)";
    // Start the fading animation
    currSlide.classList.add("fade");
    currSlide.classList.remove("fadeOut");
    // Prepare for the reset next button press or update. In 2 seconds, remove the fade in animation. 2.75 seconds after that, add the fade out.
    slideTimeout = setTimeout(function(){ currSlide.classList.remove("fade"); setTimeout(function () { currSlide.classList.add("fadeOut"); }, 2750)}, 2000);
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // dots[slideIndex-1].className += " active";


    // slides[slideIndex-1].style.display = "block";
}
