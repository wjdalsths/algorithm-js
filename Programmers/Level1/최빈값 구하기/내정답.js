function solution(array) {
  const cnt = {};
  array.forEach((cur) => {
    !cnt[cur] ? (cnt[cur] = 1) : (cnt[cur] += 1);
  });

  const set = Object.entries(cnt)
    .map(([key, e]) => {
      return { ind: key, indCnt: e };
    })
    .sort((a, b) => b.indCnt - a.indCnt);

  return set[0].indCnt === set[1]?.indCnt ? -1 : Number(set[0].ind);
}
