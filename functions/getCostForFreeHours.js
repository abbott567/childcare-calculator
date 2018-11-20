function getCostForFreeHours(numberOfFreeHours, age) {
  if (numberOfFreeHours === '15' || numberOfFreeHours === 15) {
    if (age === 2) {
      return 78;
    }
    if (age === 3) {
      return 65.10;
    }
  }

  if (numberOfFreeHours === '30' || numberOfFreeHours === 30) {
    return 130.20;
  }

  return 0;
}

module.exports = {getCostForFreeHours};
