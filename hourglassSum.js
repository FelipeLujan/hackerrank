let arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let sum = (array) => {
  let total = 0;

  array.forEach((element) => {
    total += element;
  });
  return total;
};

let hourglassSum = (arr) => {
  let results = [];
  for (let row = 0; row <= 3; row++) {
    for (let column = 0; column <= 3; column++) {
      let r1 = [arr[row][column], arr[row][column + 1], arr[row][column + 2]];
      let r2 = [arr[row + 1][column + 1]];
      let r3 = [
        arr[row + 2][column],
        arr[row + 2][column + 1],
        arr[row + 2][column + 2],
      ];
      let values = [...r1, ...r2, ...r3];
      results.push(sum(values));
    }
  }
  return Math.max(...results);
};
