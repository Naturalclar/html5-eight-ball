function Game(){

}

Game.prototype.init = function(){
  this.gameworld = new GameWorld();
}

Game.prototype.start = function(){
  PoolGame.init();
  PoolGame.mainLoop();
}

Game.prototype.mainLoop = function(){
  Canvas.clear();
  PoolGame.gameWorld.update();
  PoolGame.gameWorld.draw();

  requestAnimationFrame(PoolGame.mainLoop);
}

let PoolGame = new Game();

