function minimumBribes(q) {
  if (!q instanceof Array) {
    return;
  }

  let brides = 0; //?

  for (let position = 0; position < q.length - 1; position++) {
    let consecutive = position + 1; //?
    let actual = line[position]; //?

    if (consecutive != actual) {
      if (actual === consecutive + 1) {
        brides += 1;
      } else if (actual === consecutive + 2) {
        brides += 2;
      } else if (actual < consecutive) {
        continue;
      } else {
        brides = 'too chaotic';
        break;
      }
    }
  }
  return brides;
}
let line = [1, 3, 4, 5, 2];
minimumBribes(line); //?
