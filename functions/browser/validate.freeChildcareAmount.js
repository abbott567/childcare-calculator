function validateFreeChildcareAmount(freeChildcareAmount, errors) {
  if (!freeChildcareAmount) {
    errors.push({
      summary: 'How many hours free childcare do you get?: choose an option',
      label: 'Choose an option'
    });
  }
  return errors;
}

module.exports = {validateFreeChildcareAmount};
