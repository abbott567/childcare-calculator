function validateFulltime(fulltime, errors) {
  if (!fulltime) {
    errors.push({
      summary: 'Do you need full-time childcare?: choose an option',
      label: 'Choose an option',
      id: 'fg-fulltime'
    });
  }
  return errors;
}

module.exports = {validateFulltime};
