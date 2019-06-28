class Line {

  constructor(origin, length, angle, context) {
    this.origin = origin;
    this.angle = angle;
    this.context = context;
    this.length = length;

    this.cos_angle   = Math.cos(this.angle);
    this.sin_angle   = Math.sin(this.angle);

    this.destination = new Point(
      this.origin.x + this.cos_angle * this.length,
      this.origin.y + this.sin_angle * this.length
    );
  }

  draw() {
    this.context.beginPath();
    this.context.moveTo(
      this.origin.x,
      this.origin.y
    );

    this.context.lineTo(
      this.destination.x,
      this.destination.y
    );

    this.context.stroke();
  };

  split_1() {
    return new Line(
      this.origin,
      this.length / 4,
      this.angle,
      this.context
    );
  }

  split_2() {
    return new Line(
      this.split_1().destination,
      (this.length/4)*Math.sqrt(2),
      this.split_1().angle - Math.PI/4,
      this.context
    );
  }

  split_3() {
    return new Line(
      this.split_2().destination,
      (this.length/4)*Math.sqrt(2),
      this.split_2().angle + Math.PI/2,
      this.context
    );
  }

  split_4() {
    return new Line(
      this.split_3().destination,
      this.length / 4,
      this.angle,
      this.context
    );
  }
}

function Point(x,y){
  this.x = x;
  this.y = y;
}
