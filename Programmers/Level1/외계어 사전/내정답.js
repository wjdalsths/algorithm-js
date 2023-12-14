function solution(spell, dic) {
  let answer = 2;

  dic.forEach((cur) => {
    if (spell.every((e) => cur.includes(e))) answer = 1;
  });

  return answer;
}
