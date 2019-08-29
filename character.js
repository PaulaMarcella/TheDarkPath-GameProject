class Character {
  constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = 0;
        this.y = 0;
        this.radius = 19;
        this.ctx = this.game.ctx;
    }
 
  drawplayer() {
        
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.arc(40 + this.x * 80, 25 + this.y * 50, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();

    }

    move (direction) {
      const maze = this.game.maze;
      const row = this.y;
      const column = this.x;
      const cell = maze.matrix[row][column];
      const directionHasAWall = cell.walls[direction];
      if (directionHasAWall) return;
      switch (direction) {
        case "up":
          this.y -= 1;
          break;     
        case "right":
          this.x += 1;
          break;
        case "left":
          this.x -= 1;
          break;    
        case "down":
          this.y += 1;
          break;
      }
    }

    collisionLight() {
      const light = this.game.light;
      const x = 40 + this.x * 80;
      const y = 25 + this.y * 50;
      if (x >= light.x - light.radius && 
          x <= light.x + light.radius &&
          y >= light.y - light.radius && 
          y <= light.y + light.radius
      ) { return  this.game.gameOver() }      
    }

    collisionGold() {
      const gold = this.game.gold;
      const light = this.game.light;
      const x = this.x
      const y = this.y;

      for (let i = 0; i < gold.length; i++){
        if (x === gold[i].x && 
        y === gold[i].y) {
        console.log("GOLD")
        light.shrinklight()
          //gold.push(new Gold(this));
        }
      }
    }

    collisionPolice() {
      const police = this.game.police;
      const light = this.game.light;
      const x = this.x
      const y = this.y;

      for (let i = 0; i < police.length; i++) {
        if (x === police[i].x && 
          y === police[i].y) {
              console.log("POLICE");
              return light.growlight(); 
        }
      }

    }

    finish() {
        if (this.x == 9 && this.y == 9){
          return console.log("FINISH");
        }
      } 
    

}
