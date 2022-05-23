const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let Arr = line.split(" ");
  const fillterArr = Array.from(new Set(Arr)); //set을 이용해서 중복된 값들을 제거
  if (fillterArr.length === 1 || fillterArr.length === 3) console.log(0);
  else {
    const kind1 = fillterArr[0];
    const kind2 = fillterArr[1];
    if (kind1 === "1" && kind2 === "2") {
      const value = Arr.filter((element) => "2" === element).length;
      console.log(value);
    } else if (kind1 === "2" && kind2 === "3") {
      const value = Arr.filter((element) => "3" === element).length;
      console.log(value);
    } else {
      const value = Arr.filter((element) => "1" === element).length;
      console.log(value);
    }
  }

  rl.close();
}).on("close", function () {
  process.exit();
});
