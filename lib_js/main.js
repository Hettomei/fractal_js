window.onload = function(){
  var board = new Board('mon_canvas');
  var lines = []

  var origin = new Point(10, window.innerHeight / 2 + 200);
  var angle = 0 * Math.PI;
  var length = window.innerWidth - 60 ;
  // From 1 to 10. Higger may kill browser
  const precision = 8;

  lines.push(new Line(origin, length, angle, board.context));

  for(var i = 0; i < precision; i++){
    future_lines = [];
    lines.forEach((line) => {
      future_lines.push(line.split_1());
      future_lines.push(line.split_2());
      future_lines.push(line.split_3());
      future_lines.push(line.split_4());
    });
    lines=future_lines;
  }

  board.clean_background();
  lines.forEach(function(entry) {
    entry.draw();
  });

};
