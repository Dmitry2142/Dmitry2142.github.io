$('.nav a, .nav-mobile a, .up-arrow').click(
    function() { 
        let href = $(this).attr('href');
        let offsetTop = $(href).offset().top;
        let headerHeight = $('.header').outerHeight();
        $('html, body').animate({scrollTop: offsetTop - headerHeight}, 2000);
        return false;
    }
);

var mobileMenuWrapper = $('.nav-mobile-wrapper');

$('.menu-button').click(function(){
    if ( !mobileMenuWrapper.hasClass('nav-mobile-active') ) {
        mobileMenuWrapper.scrollTop(0);
    }
    $(this).toggleClass('menu-button-active');
    mobileMenuWrapper.toggleClass('nav-mobile-active');
});