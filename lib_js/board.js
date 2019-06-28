function Board(canvas_id){
  this.canvas  = document.getElementById(canvas_id);
  this.context = this.canvas.getContext('2d');
  this.width = 1500; //px
  this.height = 800; //px
}

// to clean_background
Board.prototype.clean_background = function(){
  this.canvas.width  = this.width;
  this.canvas.height = this.height;
};
