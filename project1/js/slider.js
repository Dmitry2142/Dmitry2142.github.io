var slideContainer = $('.slides-wrapper');
var interval = 2000;
var slides = $('.slide');
var prev = $('.slide-prev');
var next = $('.slide-next');

var points = $('.point');
var pointFirst = points.eq(0);
var pointSecond = points.eq(1);
var pointThird = points.eq(2);

initSlider();

var timerId = setInterval(nextSlide, interval);
var counter = 0;
var total = slides.length;
pointCircle();

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
    pointCircle();
    var offset = counter * -100 + '%';
    slideContainer.animate({left: offset}, 500);
}

function nextSlide() {
    if (counter == total) {
        counter = 0;
        resetSlide(counter);
    }
    
    counter++;
    pointCircle();
    var offset = counter * -100 + '%';
    slideContainer.animate({left: offset}, 500);
}

function pointCircle(){
    if(counter == 0 || counter == 3){
        pointFirst.addClass('point_Circle');
        pointSecond.removeClass('point_Circle');
        pointThird.removeClass('point_Circle'); 
    }else if(counter == 1){
        pointFirst.removeClass('point_Circle');
        pointSecond.addClass('point_Circle');
        pointThird.removeClass('point_Circle'); 
    }else if(counter == 2){
        pointFirst.removeClass('point_Circle');
        pointSecond.removeClass('point_Circle');
        pointThird.addClass('point_Circle'); 
    }

}
