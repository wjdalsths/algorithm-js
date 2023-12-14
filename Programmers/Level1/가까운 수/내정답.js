function solution(array, n) {
  if (array.length == 1) return array[0];

  let arr = array.map((cur, idx) => {
    return { idx: idx, value: Math.abs(cur - n) };
  });

  arr.sort((a, b) => a.value - b.value);

  if (arr[0].value == arr[1].value)
    return Math.min(array[arr[0].idx], array[arr[1].idx]);

  return array[arr[0].idx];
}
