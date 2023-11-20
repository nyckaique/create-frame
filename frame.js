function frame(row, col) {
  var line = "+";
  var middleLine = "|";
  if (row > 1 && col > 1) {
    for (var i = 0; i < row - 2; i++) {
      line = line + "-";
      middleLine = middleLine + " ";
    }
    line = line + "+";
    middleLine = middleLine + "|";
    console.log(line);
    for (var i = 0; i < col - 2; i++) {
      console.log(middleLine);
    }
    console.log(line);
  }
}
frame(15, 5);
