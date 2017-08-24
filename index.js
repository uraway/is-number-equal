module.exports = function isNumberEqual(a, b) {
  if (Number(a) === 'NaN' || Number(b) === 'NaN') return false;
  if (Number(a) !== Number(b)) return false;
  return true;
};
