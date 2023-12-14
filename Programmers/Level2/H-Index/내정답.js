function solution(citations) {
  let arr = [];

  citations = citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) break;

    arr.push(citations[i]);
  }

  return arr.length;
}

function solution(citations) {
  let i = 0;

  citations = citations.sort((a, b) => b - a);

  while (i + 1 <= citations[i]) i++;

  return i;
}
