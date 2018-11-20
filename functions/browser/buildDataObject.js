const {getChildAge} = require('./../getChildAge');

function buildDataObject() {
  const data = {
    freeChildcare: $('input[name="freeChildcare"]:checked').val(),
    dateOfBirth: {
      day: $('#dob-day').val(),
      month: $('#dob-month').val(),
      year: $('#dob-year').val()
    },
    startDate: {
      day: $('#start-day').val(),
      month: $('#start-month').val(),
      year: $('#start-year').val()
    },
    fulltime: $('input[name="fulltime"]:checked').val()
  };
  if (data.freeChildcare === 'Yes') {
    data.freeChildcareAmount = $('input[name="freeChildcareAmount"]:checked').val();
  }
  if (data.fulltime === 'Yes') {
    data.days = ['full', 'full', 'full', 'full', 'full'];
  } else {
    data.days = [
      $('input[name="monday[]"]:checked').val(),
      $('input[name="tuesday[]"]:checked').val(),
      $('input[name="wednesday[]"]:checked').val(),
      $('input[name="thursday[]"]:checked').val(),
      $('input[name="friday[]"]:checked').val()
    ];
  }
  data.age = getChildAge(data.dateOfBirth, data.startDate);
  return data;
}

module.exports = {buildDataObject};
