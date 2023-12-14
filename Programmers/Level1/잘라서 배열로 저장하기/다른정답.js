function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

// `.{1, ${n}}`, "g" -> . : 모든 문자열 탐색, {a, b}: a개 이상 b개 이하씩 탐색(a개 이상인 이유는 마지막에 n개보다 작게 나오는 경우 커버 위함, "g": 전역 탐색
