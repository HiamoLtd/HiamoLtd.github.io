var slideIndex = 1;
var slideTimeout;
// Display the first slide on startup
showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}

var myTimer = setInterval(nextSlide, 5000);


function plusSlides(n) {
    clearTimeout(slideTimeout);
    document.getElementById("slideDisplay").classList.remove("fade");
    document.getElementById("slideDisplay").classList.remove("fadeOut");
    showSlides(slideIndex += n);
    clearInterval(myTimer);
    myTimer = setInterval(nextSlide, 5000);
}

var current = function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var currSlide = document.getElementById("slideDisplay");
    // TODO slides as a number are currently hardcoded in. Obviously this isn't ideal. Get it to read the slides file isntead.
    var slideCount = 11;
    if (n >= slideCount) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slideCount;
    }
    currSlide.style.backgroundImage = "url(./images/slideshow/img" + slideIndex + ".jpg)";
    // Start the fading animation
    currSlide.classList.add("fade");
    currSlide.classList.remove("fadeOut");
    // Prepare for the reset next button press or update. In 2 seconds, remove the fade in animation. 2.75 seconds after that, add the fade out.
    slideTimeout = setTimeout(function(){ currSlide.classList.remove("fade"); setTimeout(function () { currSlide.classList.add("fadeOut"); }, 2750)}, 2000);
}
