function clearErrors() {
  const $summary = $('.ymca-error-summary:first');
  const $errorLabel = $(document).find('.ymca-error-label');
  $summary.remove();
  $errorLabel.each(function () {
    $(this).closest('.ymca-error').removeClass('ymca-error');
    $(this).remove();
  });
  const titleText = $('title').text().replace('Error: ', '');
  $('title').text(titleText);
}

module.exports = {clearErrors};
