$(document).ready(function(){
  //ripple effect
    "use strict"
     $('.slider').ripples({
       dropRadius: 5,
       perturbance: 0.01,
      });
      $(window).scroll(function(){
        var top = $(window).scrollTop();
        if (top>=60){
          $("nav").addClass('secondary');
        }
        else
        if ($("nav").hasClass('secondary')) {
             $("nav").removeClass('secondary');
        }
     });
     //counter
     $('.counter').counterUp({
      delay: 5,
      time: 500
  });
});

