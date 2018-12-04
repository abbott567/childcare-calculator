function hideHidden() {
  $(document).find('.js-hidden').each(function () {
    $(this).hide();
  });
}

$(document).ready(() => {
  hideHidden();
  $('#unhide-with-js').show();
});

$(document).on('click', '#freeChildcare-yes', () => {
  $('#freeChildcare-hidden').show();
});
$(document).on('click', '#freeChildcare-no', () => {
  $('#freeChildcare-hidden').hide();
});

$(document).on('click', '#fulltime-yes', () => {
  $('#part-time-hidden').hide();
});
$(document).on('click', '#fulltime-no', () => {
  $('#part-time-hidden').show();
});
