function validateDateOfBirth(dateOfBirth, errors) {
  if (!dateOfBirth.day) {
    errors.push({
      summary: 'What is your childs date of birth?: day cannot be blank',
      label: 'Cannot be blank'
    });
  } else if (dateOfBirth.day > 31) {
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
  } else if (dateOfBirth.month > 12) {
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
