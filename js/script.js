(function() {
   // your page initialization code here
   // the DOM will be available here
   $("body").delay(0).animate({ opacity: 1 }, 700)
   animator();
   other();

})();

function animator() {

  ScrollReveal().reveal('header', {
    delay: 200,
    origin: 'top',
    distance: '100px',
    opacity: 0
  });

  ScrollReveal().reveal('section', {
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
  });

  ScrollReveal().reveal('p, form, h1, h2, h3, a, .price-container, input, button, .progression-image, img', {
    origin: 'bottom',
    distance: '25px',
    opacity: 0,
    delay: 350,
  });

  ScrollReveal().reveal('footer', {
    delay: 200,
    origin: 'bottom',
    distance: '100px',
    opacity: 0,
  });

}

function other() {
  $(".contact-container").click(function() {
    navigator("#contact","_self");
  });
}


function navigator(location,name) {
  window.open(location,name);
}
