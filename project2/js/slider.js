var slideContainer = $('.slider-container');
var interval = 5000;
var slides = $('.slider-item');
var prev = $('.prev-slide');
var next = $('.next-slide');
initSlider();

var timerId = setInterval(nextSlide, interval);

var counter = 0;
var total = slides.length;

prev.click(function(){
    clearInterval(timerId);
    prevSlide();
    timerId = setInterval(nextSlide, interval);
});

next.click(function(){
    clearInterval(timerId);
    nextSlide();
    timerId = setInterval(nextSlide, interval);
});

function initSlider() {
    slideContainer.append( slides.eq(0).clone() );
}

function resetSlide(counter) {
    slideContainer.css({left: counter * -100 + '%'});
}

function prevSlide() {
    if (counter == 0) {
        counter = total;
        resetSlide(counter);
    }
    counter--;

    var offset = counter * -100 + '%';
    slideContainer.animate({left: offset}, 500);
}

function nextSlide() {
    if (counter == total) {
        counter = 0;
        resetSlide(counter);
    }
    counter++;

    var offset = counter * -100 + '%';
    slideContainer.animate({left: offset}, 500);
}