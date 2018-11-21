function validateStartDate(startDate, errors) {
  const septAprJunNov = ['4', '6', '9', '11'].includes(startDate.month);

  if (!startDate.day) {
    errors.push({
      summary: 'When would you like the childcare to start?: day cannot be blank',
      label: 'Day cannot be blank',
      id: 'fg-startDate'
    });
  } else if ((startDate.month === '2' && startDate.day > 29) || (septAprJunNov && startDate.day > 30)) {
    errors.push({
      summary: 'When would you like the childcare to start?: This month does not have that many days',
      label: 'Enter a valid month',
      id: 'fg-startDate'
    });
  } else if (startDate.day === '0' || startDate.day > 31) {
    errors.push({
      summary: 'When would you like the childcare to start?: enter a valid day',
      label: 'Enter a valid day',
      id: 'fg-startDate'
    });
  }

  if (!startDate.month) {
    errors.push({
      summary: 'When would you like the childcare to start?: month cannot be blank',
      label: 'Month cannot be blank',
      id: 'fg-startDate'
    });
  } else if (startDate.month === '0' || startDate.month > 12) {
    errors.push({
      summary: 'When would you like the childcare to start?: enter a valid month',
      label: 'Enter a valid month',
      id: 'fg-startDate'
    });
  }

  if (!startDate.year) {
    errors.push({
      summary: 'When would you like the childcare to start?: year cannot be blank',
      label: 'Year cannot be blank',
      id: 'fg-startDate'
    });
  } else if (startDate.year.length !== 4) {
    errors.push({
      summary: 'When would you like the childcare to start?: enter a valid year',
      label: 'Enter a valid year',
      id: 'fg-startDate'
    });
  }
  return errors;
}

module.exports = {validateStartDate};
