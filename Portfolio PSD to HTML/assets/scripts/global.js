
$(document).ready(function(){
  
    //smooth scroll code
    $('a').smoothScroll({
        speed:800
    });

    <!-- Kick off Filterizr -->
    $(function() {
        //Initialize filterizr with default options
        $('.filtr-container').filterizr();
    });


});
