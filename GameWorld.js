// Contains all the physical object of the game

function GameWorld(){
  this.stick = new Stick();
}

GameWorld.prototype.update = function(){

}

GameWorld.prototype.draw = function(){
  Canvas.drawImage(sprites.background, {x:0, y:0});
}