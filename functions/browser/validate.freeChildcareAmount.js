function validateFreeChildcareAmount(freeChildcareAmount, errors) {
  if (!freeChildcareAmount) {
    errors.push({
      summary: 'How many hours free childcare do you get?: choose an option',
      label: 'Choose an option',
      id: 'fg-freeChildcareAmount'
    });
  }
  return errors;
}

module.exports = {validateFreeChildcareAmount};
