var Speed = 5.5
var Delta = 10.5
var Players = function(Name, X, Y){
  this.name = name;
  this.X = X;
  this.Y = Y;
}
var Player = new Players(playerName, 0, 0)

function drawPlayer() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(Player.X,Player.Y,100,100);
  }
}

function movePlayerRight() {
  Player.X = Player.X * Speed + Delta
  drawPlayer()
}
