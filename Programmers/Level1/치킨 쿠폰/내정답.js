function solution(chicken) {
  let coupon = chicken;
  let cnt = 0;

  while (coupon >= 10) {
    let service = Math.floor(coupon / 10);
    cnt += service;
    coupon = (coupon % 10) + service;
  }

  return cnt;
}
