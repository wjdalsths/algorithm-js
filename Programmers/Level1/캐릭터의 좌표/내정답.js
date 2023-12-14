function solution(keyinput, board) {
  let X = 0;
  let Y = 0;
  let Max_width = (board[0] - 1) / 2;
  let Max_height = (board[1] - 1) / 2;

  keyinput.forEach((cur) => {
    cur === "up" && Y < Max_height && (Y += 1);
    cur === "down" && Y > -Max_height && (Y -= 1);
    cur === "left" && X > -Max_width && (X -= 1);
    cur === "right" && X < Max_width && (X += 1);
  });

  return [X, Y];
}
