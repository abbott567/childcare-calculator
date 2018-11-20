function validateFreeChildcare(freeChildcare, errors) {
  if (!freeChildcare) {
    errors.push({
      summary: 'Do you get free childcare?: choose an option',
      label: 'Choose an option'
    });
  }
  return errors;
}

module.exports = {validateFreeChildcare};
