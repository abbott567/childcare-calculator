$(document).ready(function () {
  $('.js-hidden').hide();
  showHide();
});

$(document).on('click', function () {
  showHide();
});

function showHide () {
  if ($('#freeCare-yes').is(':checked')) {
    $('#childcare-hidden').show();
  } else {
    $('#childcare-hidden').hide();
    $('#childcare-hidden').find('input').each(function () {
      $(this).prop('checked', false);
    });
  }

  if ($('#fullTime-no').is(':checked')) {
    $('#part-time-hidden').show();
  } else {
    $('#part-time-hidden').hide();
    $('#part-time-hidden').find('input').each(function () {
      $(this).prop('checked', false);
    });
  }
}