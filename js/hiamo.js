var slideIndex = 1;
// Display the first slide on startup
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

var myTimer = setInterval(nextSlide, 30000);


function plusSlides(n) {
    showSlides(slideIndex += n);
    clearInterval(myTimer);
    myTimer = setInterval(nextSlide, 5000);
}

var current = function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
}
