function solution(balls, share) {
  var result = 1;
  while (share > 0) {
    result = (result * balls) / share;
    balls = balls - 1;
    share = share - 1;
  }
  return;
}

// ---------

const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}
