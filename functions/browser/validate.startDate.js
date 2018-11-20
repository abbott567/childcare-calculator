function validateStartDate(startDate, errors) {
  if (!startDate.day) {
    errors.push({
      summary: 'When would you like the childcare to start?: day cannot be blank',
      label: 'Cannot be blank'
    });
  } else if (startDate.day > 31) {
    errors.push({
      summary: 'When would you like the childcare to start?: enter a valid day',
      label: 'Enter a valid day'
    });
  }

  if (!startDate.month) {
    errors.push({
      summary: 'When would you like the childcare to start?: month cannot be blank',
      label: 'Cannot be blank'
    });
  } else if (startDate.month > 12) {
    errors.push({
      summary: 'When would you like the childcare to start?: enter a valid month',
      label: 'Enter a valid month'
    });
  }

  if (!startDate.year) {
    errors.push({
      summary: 'When would you like the childcare to start?: year cannot be blank',
      label: 'Cannot be blank'
    });
  } else if (startDate.year.length !== 4) {
    errors.push({
      summary: 'When would you like the childcare to start?: enter a valid year',
      label: 'Enter a valid year'
    });
  }
  return errors;
}

module.exports = {validateStartDate};
