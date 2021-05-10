let rotate = (array) => {
  array.push(array.shift());

  return array;
};

function rotLeft(a, d) {
  if (!a.length || (a.length === 1) | !d % a.length) {
    return a;
  }
  for (let times = 1; times <= d % a.length; times++) {
    a = rotate(a);
  }
  return a;
}
rotLeft([1, 2, 3], 1);
