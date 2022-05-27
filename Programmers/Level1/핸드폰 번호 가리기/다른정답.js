function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
  //4자리 이상의 주어진 숫자에서 마지막 4자리를 제외한 모든 숫자를 마스킹합니다.
  //(?=\d{4})이 reges는 4자리 숫자가 뒤에 와야 함을 의미 하는 긍정적인 lookhead를 사용합니다 .
  //\d위의 예견 조건이 있는 한 자리 숫자와 일치하고 이를 다음으로 대체합니다.*
}

console.log("결과 : " + hide_numbers("01033334444"));
