(function() {
   // your page initialization code here
   // the DOM will be available here
   animator();
})();

function animator() {

  ScrollReveal().reveal('header', {
    delay: 150,
    origin: 'top',
    distance: '100px',
    opacity: 1
  });
  
  ScrollReveal().reveal('main', {
    delay: 150,
    origin: 'top',
    distance: '180px',
    opacity: 1
  });

  ScrollReveal().reveal('.header-container', {
    delay: 300,
    origin: 'top',
    distance: '20px',
    opacity: 0
  });

}
