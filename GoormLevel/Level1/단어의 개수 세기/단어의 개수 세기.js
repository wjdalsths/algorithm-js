/* 문자열 한줄이 주어졌을 때 , 해당 줄에 몇 개의 영단어가 존재하는지 계산하는 프로그램을 작성하시오.
문자열은 알파벳 대/소문자 및 공백으로 구성되어 있으며, 공백없이 하나 이상의 알파벳이 연속된 부분 문자열을 단어로 정의한다.*/

function a(line){
  let cnt=0;
    if(line[0] != " ")
      cnt = 1
    for(let i=0; i<line.length; i++){
      if(line[i] === " ")
        if(line[i+1] === " "){
          continue;
        }else(
          cnt++
        )
    }
    console.log(cnt);
}
