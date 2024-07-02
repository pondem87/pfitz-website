
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/slide/arduino_nano_hi_res_slide.jpg", 
      "images/slide/coding_hi_res_slide.jpg",
      "images/slide/pcb_hi_res_slide.jpg",
      "images/slide/ui_hi_res_slide.jpg"
    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


