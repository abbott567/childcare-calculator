function validateDateOfBirth(dateOfBirth, errors) {
  const septAprJunNov = ['4', '6', '9', '11'].includes(dateOfBirth.month);

  if (!dateOfBirth.day) {
    errors.push({
      summary: 'What is your childs date of birth?: day cannot be blank',
      label: 'Cannot be blank'
    });
  } else if ((dateOfBirth.month === '2' && dateOfBirth.day > 29) || (septAprJunNov && dateOfBirth.day > 30)) {
    errors.push({
      summary: 'What is your childs date of birth?: This month does not have that many days',
      label: 'Check the date of birth'
    });
  } else if (dateOfBirth.day === '0' || dateOfBirth.day > 31) {
    errors.push({
      summary: 'What is your childs date of birth?: enter a valid day',
      label: 'Enter a valid day'
    });
  }

  if (!dateOfBirth.month) {
    errors.push({
      summary: 'What is your childs date of birth?: month cannot be blank',
      label: 'Cannot be blank'
    });
  } else if (dateOfBirth.month === '0' || dateOfBirth.month > 12) {
    errors.push({
      summary: 'What is your childs date of birth?: enter a valid month',
      label: 'Enter a valid month'
    });
  }

  if (!dateOfBirth.year) {
    errors.push({
      summary: 'What is your childs date of birth?: year cannot be blank',
      label: 'Cannot be blank'
    });
  } else if (dateOfBirth.year.length !== 4) {
    errors.push({
      summary: 'What is your childs date of birth?: enter a valid year',
      label: 'Enter a valid year'
    });
  }
  return errors;
}

module.exports = {validateDateOfBirth};
