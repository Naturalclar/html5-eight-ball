function Stick(){
  this.position = {x:0, y:400};
}

Stick.prototype.update = function(){
  //Testing
  this.position.x++;
}

Stick.prototype.draw = function(){
  Canvas.drawImage(sprites.stick, this.position);
}