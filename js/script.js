(function() {
   // your page initialization code here
   // the DOM will be available here
   animator();

   $(window).scroll(function() {

    //After scrolling 100px from the top...
    if ( $(window).scrollTop() >= 1 ) {
        // $('header').css('transition', 'all .2s ease');
        $('header').css('backgroundColor', 'var(--secondary)');

    //Otherwise remove inline styles and thereby revert to original stying
    } else {
        $('header').attr('style', '');

    }
  });

})();

function animator() {

  ScrollReveal().reveal('header', {
    delay: 300,
    origin: 'top',
    distance: '100px',
    opacity: 0
  });

  ScrollReveal().reveal('.introduction', {
    delay: 300,
    origin: 'top',
    distance: '100px',
    opacity: 0
  });

  ScrollReveal().reveal('.header-container', {
    delay: 600,
    origin: 'top',
    distance: '100px',
    opacity: 0
  });
  ScrollReveal().reveal('.introduction-left-container', {
    delay: 600,
    origin: 'left',
    distance: '50px',
    opacity: 0
  });

}
