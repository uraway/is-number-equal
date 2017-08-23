module.exports = function isNumberEqual(a, b) {
  const numberA = Number(a);
  const numberB = Number(b);

  if (numberA === 'NaN' || numberB === 'NaN') return false;
  if (numberA !== numberB) return false;
  return true;
};
