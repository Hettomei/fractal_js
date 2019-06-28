function Board(canvas_id){
  this.canvas  = document.getElementById(canvas_id);
  this.context = this.canvas.getContext('2d');
  this.width = window.innerWidth - 40; //px
  this.height = window.innerHeight - 30; //px
}

// to clean_background
Board.prototype.clean_background = function(){
  this.canvas.width  = this.width;
  this.canvas.height = this.height;
};
