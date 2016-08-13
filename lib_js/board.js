function Board(canvas_id){
  this.canvas  = document.getElementById(canvas_id);
  this.context = this.canvas.getContext('2d');
  this.width = 1000; //px
  this.height = 600; //px
  this.margin = 10;
}

// to clean_background
Board.prototype.clean_background = function(){
  this.canvas.width  = this.width;
  this.canvas.height = this.height;
};
