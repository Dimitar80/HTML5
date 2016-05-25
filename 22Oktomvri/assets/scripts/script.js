/**
 * Created by Kristina Shalkoska on 4/10/2016.
 */
$(document).ready(function(){
    $(".fa-search").click(function(){
        $("div.search-bar").toggle();
    });


//smooth scroll code
    $('a').smoothScroll({
        speed:800
    });

    $('a.up-scroll').on('click', function() {
        $.smoothScroll({
            // scrollElement: $('.up-scroll'),
            scrollTarget: '#pocetna',
            speed:1000
        });
        return false;
    });
// Animate loader off screen
    $(window).load(function() {

        $("#preloader").fadeOut(2000);
    });
});
