$('#btn').click(function() {
    $('ol').slideToggle();
});
$(window).resize(function(){
    var width = $(window).width();
    if(width > 500 && $('ol').is(':hidden')) {
        $('ol').removeAttr('style');
    }
});