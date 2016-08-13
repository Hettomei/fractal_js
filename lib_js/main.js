window.onload = function(){
  var board    = new Board('mon_canvas');
  var lines = []

  var origin = new Point(30, 500);
  var angle = 0 * Math.PI;
  var length = 800;

  lines.push(new Line(origin, length, angle, board.context));

  for(var i = 0; i < 6; i++){
    future_lines = [];
    lines.forEach(function(line) {
      future_lines.push(line.split_1());
      future_lines.push(line.split_2());
      future_lines.push(line.split_3());
      future_lines.push(line.split_4());
    });
    lines=future_lines;
    future_lines = [];
  }

  board.clean_background();
  lines.forEach(function(entry) {
    entry.draw();
  });

};
