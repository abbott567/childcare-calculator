function scrollToTop() {
  $('html,body').animate({scrollTop: 0}, 0);
  $('.ymca-error-summary:first').focus();
}

module.exports = {scrollToTop};
