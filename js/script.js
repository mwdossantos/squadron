(function() {
   // your page initialization code here
   // the DOM will be available here
   animator();
   other();

})();

function animator() {

  // ScrollReveal().reveal('header', {
  //   delay: 300,
  //   origin: 'top',
  //   distance: '100px',
  //   opacity: 0
  // });

}

function other() {
  $(".contact-container").click(function() {
    navigator("#contact","_self");
  })

  $(".contact-form").submit(function () {
    sendContactForm();
    return false;
  });
}

function sendContactForm() {
  $(".message-sent").slideDown("slow");
  setTimeout('$(".message-sent").slideUp();', 4000);
}

function navigator(location,name) {
  window.open(location,name);
}
