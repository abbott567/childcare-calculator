function getPrettyDays(days) {
  const counts = {fullDays: 0, halfDays: 0};
  for (let i = 0; i < days.length; i++) {
    if (days[i] === 'full') {
      counts.fullDays++;
    } else if (days[i] === 'half') {
      counts.halfDays++;
    }
  }
  const fs = counts.fullDays === 1 ? '' : 's';
  const hs = counts.halfDays === 1 ? '' : 's';
  if (counts.halfDays === 0) {
    return `${counts.fullDays} full day${fs}`;
  }
  return `${counts.fullDays} full day${fs} and ${counts.halfDays} half day${hs}`;
}

function getPrettyAge(age) {
  if (age < 2) {
    return 'baby under 2';
  }
  return age + ' year old';
}

function getPrettyCost(number) {
  return '£' + number.toFixed(2);
}

module.exports = {getPrettyDays, getPrettyAge, getPrettyCost};
