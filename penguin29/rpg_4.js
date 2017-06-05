enchant();
window.onload=function() {
  var game = new Core(300,300);
  game.keybind(32,'a');//new binding the spacebar to the "a button" key
  game.spriteSheetWidth = 256;
  game.spriteSheetHeight = 16;
  game.fps = 15;
  game.spriteWidth=16;
  game.spriteHeight=16;
  game.preload('sprites.png');
  var map = new Map(game.spriteWidth, game.spriteHeight);
  var foregroundMap = new Map(game.spriteWidth, game.spriteHeight);

function setMaps() {
  map.image=game.assets['sprites.png'];
  map.loadData(mapData);
  foregroundMap.image = game.assets['sprites.png'];
  foregroundMap.loadData(foregroundData);
  var collisionData = [];
  for (var i=0; i<foregroundData.length; i++) {
    collisionData.push([]);
    for(var j=0; j<foregroundData[0].length;j++) {
      var collision = foregroundData[i][j] %13 >1 ? 1:0;
      collisionData[i][j] = collision;
    }
  }
  map.collisionData = collisionData;
}

function setStage() {
  var stage = new Group();
  stage.addChild(map);
  stage.addChild(player);
  stage.addChild(foregroundMap);
  stage.addChild(player.statusLabel); //new text label for player
  game.rootScene.addChild(stage);
}

var player = new Sprite(game.spriteWidth, game.spriteHeight);

function setPlayer() {
  player.spriteOffset = 5;
  player.startingX = 6;
  player.startingY = 14;
  player.x = player.startingX * game.spriteWidth;
  player.y = player.startingY * game.spriteHeight;
  player.direction = 0;
  player.walk = 0;
  player.frame = player.spriteOffset + player.direction;
  player.image = new Surface(game.spriteSheetWidth,game.spriteSheetHeight);
  player.image.draw(game.assets['sprites.png']);
  //new player status info
  player.name = "Arhip";
  player.charClass = "Awesome";
  player.exp = "best player in the world";
  player.level="win";
  player.gp = 1,000,000;
  player.hp = 1,000,000;
  player.maxHp =100;
  player.statusLabel= new Label("");
  player.statusLabel.width = 200;
  player.statusLabel.x = 0;
  player.statusLabel.y = 0;
  player.statusLabel.color = "#fff";
  player.statusLabel.backgroundColor = "black";
  player.statusLabel.height = 60;
}
//functions related to the player
player.displayStatus = function() {
  
  player.statusLabel.text =
  "--" + player.name + " the " + player.charClass+
  "<br>--HP: "+player.hp + "/" + player.maxHp +
  "<br>--Exp lev: "+player.exp +
  "<br>--HP: "+player.level
  "<br>--HP: "+player.gp
}

//what is this here
player.move = function(){
  this.frame = this.spriteOffset + this.direction * 2 + this.walk;
  if (this.isMoving) {
    this.moveBy(this.xMovement, this.yMovement);
    if ((game.frame%2)!==0 ){
      this.walk++;
      this.walk %=2;
    }
    if ((this.xMovement && this.x % 16 === 0) || (this.yMovement && this.y % 16 ===0)) {
      this.isMoving = false;
      this.walk = 1;
    }
  } else {
    this.xMovement = 0;
    this.yMovement = 0;
    if (game.input.up) {
      this.direction = 1;
      this.yMovement = -4;
      player.statusLabel.text = "";//new - status disappears when you start walking
    } else if (game.input.right) {
      this.direction = 2;
      this.xMovement = 4;
      player.statusLabel.text = "";//new - status disappears when you start walking
    } else if (game.input.left) {
      this.direction = 3;
      this.xMovement = -4;
      player.statusLabel.text = "";//new - status disappears when you start walking
    } else if (game.input.down) {
      this.direction = 0;
      this.yMovement = 4;
      player.statusLabel.text = "";//new - status disappears when you start walking
    }
    //use of ? : as if (this is true)- then (?) - else(:)
    if (this.xMovement || this.yMovement) {
      var x = this.x + (this.xMovement ? this.xMovement/Math.abs(this.xMovement)*16: 0);
      var y = this.y + (this.yMovement ? this.yMovement/Math.abs(this.yMovement)*16: 0);
      //new added !map.hitTest(x,y) so only allow movement if hitTest(x,y) is false
      if (0<=x && x < map.width && 0 <= y && y< map.height && !map.hitTest(x,y)) {
        this.isMoving = true;
        this.move();
      }
    }
  }
}; //for player.move

game.focusViewport = function() {
  var x = Math.min((game.width -16)/2 - player.x,0);
  var y = Math.min((game.height -16)/2 - player.y,0);
  x = Math.max(game.width, x+map.width) - map.width;
  y = Math.max(game.height, x+map.height) - map.height;
  game.rootScene.firstChild.x = x;
  game.rootScene.firstChild.y = y;
};

game.onload = function() {
  setPlayer();
  setMaps();
  setStage();
  player.on('enterframe', function() {
    player.move();
    //new eventlistener for 'a' button to player.displayStatus function
    if (game.input.a) {
      player.displayStatus();
    }
  });
  game.rootScene.on('enterframe', function(e) {
    game.focusViewport();
  });
};

game.start();

};