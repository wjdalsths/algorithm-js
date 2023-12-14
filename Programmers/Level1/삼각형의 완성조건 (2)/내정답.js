function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

// 삼각형의 가장 긴 변의 길이가 나머지 두 변의 길이의 합보다 작아야합니다
// max = 주어진 두 변 중 긴 한 변
// min = 주어진 두 변 중 짧은 한 변

// case1: 주어진 두 변의 길이 중 하나가 가장 긴 변일 경우
// max < min + (다른 한 변)
// max - min < (다른 한 변)

// case2: 주어진 두 변 외에 다른 긴 변이 있는 경우
// (다른 한 변) < max + min

// 두 케이스를 조합하면
// max - min < (다른 한 변) < max + min 이므로
// (다른 한 변)이 나올 수 있는 가짓수는
// (max + min) - (max - min) - 1 = min * 2 - 1 입니다
