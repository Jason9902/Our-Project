$(document).ready(function(){
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
     $('.counter').counterUp({
      delay: 5,
      time: 500
  });
  const backToTopButton = document.querySelector("#back-to-top-button");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("buttonEntrance")) {
      backToTopButton.classList.remove("buttonExit");
      backToTopButton.classList.add("buttonEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("buttonEntrance")) {
      backToTopButton.classList.remove("buttonEntrance");
      backToTopButton.classList.add("buttonExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
});
