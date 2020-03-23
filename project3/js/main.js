// scrollTop - положение скролла страницы

$('.nav a, .nav-mobile a, .up-arrow').click(
    function() { 
        let href = $(this).attr('href');
        let offsetTop = $(href).offset().top;
        let headerHeight = $('.header').outerHeight();
        $('html, body').animate({scrollTop: offsetTop - headerHeight}, 2000);
        return false;
    }
);

// Контейнер для мобильного меню
var mobileMenuWrapper = $('.nav-mobile-wrapper');

$('.menu-button').click(function(){
    // Перед тем, как показать меню, прокручиваем его вверх
    if ( !mobileMenuWrapper.hasClass('nav-mobile-active') ) {
        mobileMenuWrapper.scrollTop();
    }
    // Меняем вид кнопки
    $(this).toggleClass('menu-button-active');
    // Показать/скрыть меню
    mobileMenuWrapper.toggleClass('nav-mobile-active');
});