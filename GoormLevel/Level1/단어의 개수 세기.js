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
